const EventEmitter = require('events')

class Rewrite extends EventEmitter {
  description () {
    return 'URL Rewriting. Use to re-route requests to local or remote resources.'
  }

  optionDefinitions () {
    return [
      {
        name: 'rewrite',
        alias: 'r',
        type: String,
        multiple: true,
        typeLabel: '{underline expression} ...',
        description: "A list of URL rewrite rules. For each rule, separate the 'from' and 'to' routes with '->'. Whitespace surrounding the routes is ignored. E.g. '/from -> /to'."
      }
    ]
  }

  middleware (options, lws) {
    const url = require('url')
    const util = require('./lib/util')
    const routes = util.parseRewriteRules(options.rewrite)
    if (routes.length) {
      this.emit('verbose', 'middleware.rewrite.config', { rewrite: routes })
      return routes.map(route => {
        if (route.to) {
          /* `to` address is remote if the url specifies a host */
          if (url.parse(route.to).host) {
            const _ = require('koa-route')
            return _.all(route.from, proxyRequest(route, this, lws))
          } else {
            const rewrite = require('koa-rewrite-75lb')
            const rmw = rewrite(route.from, route.to, this)
            return rmw
          }
        }
      })
    }
  }
}

function proxyRequest (route, mw) {
  let id = 1

  let httpProxyAgent, httpsProxyAgent
  const httpProxy = process.env.http_proxy
  if (httpProxy) {
    const HttpsProxyAgent = require('https-proxy-agent')
    httpsProxyAgent = new HttpsProxyAgent(httpProxy)
    const HttpProxyAgent = require('http-proxy-agent')
    httpProxyAgent = new HttpProxyAgent(httpProxy)
  }

  return function proxyMiddleware (ctx) {
    return new Promise((resolve, reject) => {
      const url = require('url')
      const isHttp2 = ctx.req.httpVersion === '2.0'
      ctx.state.id = id++

      /* disable Koa response mechanism, create and send response manually */
      ctx.respond = false

      /* get remote URL */
      const util = require('./lib/util')
      const remoteUrl = util.getToUrl(ctx.url, route)

      /* info about this rewrite */
      const rewrite = {
        id: ctx.state.id,
        from: ctx.url,
        to: remoteUrl
      }

      /* if lws-request-monitor added a `requestId`, include that in the verbose output */
      if (typeof ctx.req.requestId === 'number') {
        rewrite.requestId = ctx.req.requestId
      }

      const reqInfo = {
        rewrite,
        method: ctx.request.method,
        headers: ctx.request.headers
      }

      /* ensure host header is set */
      reqInfo.headers.host = url.parse(reqInfo.rewrite.to).host

      /* remove HTTP2 request headers */
      if (isHttp2) {
        for (const prop of Object.keys(ctx.request.headers)) {
          if (prop.substr(0, 1) === ':') {
            delete reqInfo.headers[prop]
          }
        }
      }

      reqInfo.headers.via = '1.1 lws-rewrite'

      util.removeHopSpecificHeaders(reqInfo.headers)

      let transport
      const remoteReqOptions = url.parse(reqInfo.rewrite.to)
      remoteReqOptions.method = reqInfo.method
      remoteReqOptions.headers = reqInfo.headers
      remoteReqOptions.rejectUnauthorized = false

      const protocol = remoteReqOptions.protocol
      if (protocol === 'http:') {
        transport = require('http')
        remoteReqOptions.agent = httpProxyAgent
      } else if (protocol === 'https:') {
        transport = require('https')
        remoteReqOptions.agent = httpsProxyAgent
      } else {
        return reject(new Error('Protocol missing from request: ' + reqInfo.rewrite.to))
      }

      /* emit verbose info */
      mw.emit('verbose', 'middleware.rewrite.remote.request', reqInfo)

      const remoteReq = transport.request(remoteReqOptions, (remoteRes) => {
        remoteRes.headers.via = remoteRes.headers.via
          ? `${remoteRes.headers.via}, 1.1 lws-rewrite`
          : '1.1 lws-rewrite'
        mw.emit('verbose', 'middleware.rewrite.remote.response', {
          rewrite,
          status: remoteRes.statusCode,
          headers: remoteRes.headers
        })
        util.removeHopSpecificHeaders(remoteRes.headers)
        ctx.res.writeHead(remoteRes.statusCode, remoteRes.headers)
        remoteRes.pipe(ctx.res)
        resolve()
      })
      if (ctx.request.rawBody) {
        remoteReq.end(ctx.request.rawBody)
      } else {
        ctx.req.pipe(remoteReq)
      }
      remoteReq.on('error', reject)
    })
  }
}

module.exports = Rewrite
