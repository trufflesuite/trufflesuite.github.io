function parseRewriteRules (rules) {
  const arrayify = require('array-back')

  return arrayify(rules).map(rule => {
    if (typeof rule === 'string') {
      const matches = rule.match(/(\S*)\s*->\s*(\S*)/)
      if (!(matches && matches.length >= 3)) throw new Error('Invalid rule: ' + rule)
      return {
        from: matches[1],
        to: matches[2]
      }
    } else {
      return rule
    }
  })
}

function getToUrl (fromUrl, route) {
  const pathToRegexp = require('path-to-regexp')
  const fromParams = []
  const re = pathToRegexp(route.from, fromParams)
  const fromMatches = re.exec(fromUrl)

  let toUrl = route.to

  for (const [ index, fromParam ] of fromParams.entries()) {
    fromParam.value = fromMatches[index + 1]
  }

  /* replace named params */
  for (const fromParam of fromParams) {
    if (typeof fromParam.name === 'string') {
      toUrl = toUrl.replace(new RegExp(`:${fromParam.name}`, 'g'), fromParam.value)
    }
  }

  /* replace positional params */
  for (const fromParam of fromParams) {
    if (typeof fromParam.name !== 'string') {
      toUrl = fromUrl.replace(re, toUrl)
    }
  }

  return toUrl
}

function removeHopSpecificHeaders (headers) {
  const hopSpecificHeaders = [ 'connection', 'keep-alive', 'proxy-authenticate', 'proxy-authorization', 'te', 'trailer', 'transfer-encoding', 'upgrade' ]
  for (const hopHeader of hopSpecificHeaders) {
    delete headers[hopHeader]
  }
}

exports.parseRewriteRules = parseRewriteRules
exports.getToUrl = getToUrl
exports.removeHopSpecificHeaders = removeHopSpecificHeaders
