const EventEmitter = require('events')

class Cors extends EventEmitter {
  description () {
    return 'Support for setting Cross-Origin Resource Sharing (CORS) headers.'
  }

  optionDefinitions () {
    return [
      {
        name: 'cors.origin',
        description: '`Access-Control-Allow-Origin` value. Default is the request Origin header.'
      },
      {
        name: 'cors.allow-methods',
        description: '`Access-Control-Allow-Methods` value. Default is "GET,HEAD,PUT,POST,DELETE,PATCH"'
      },
      {
        name: 'cors.credentials',
        type: Boolean,
        description: 'Adds `Access-Control-Allow-Credentials` header.'
      }
    ]
  }

  middleware (config) {
    const corsOptions = {}
    if (config.corsOrigin) corsOptions.origin = config.corsOrigin
    if (config.corsAllowMethods) corsOptions.allowMethods = config.corsAllowMethods
    if (config.corsCredentials) corsOptions.credentials = config.corsCredentials
    this.emit('verbose', 'middleware.cors.config', corsOptions)
    const kcors = require('@koa/cors')
    return kcors(corsOptions)
  }
}

module.exports = Cors
