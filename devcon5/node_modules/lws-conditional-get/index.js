const EventEmitter = require('events')

class ConditionalGet extends EventEmitter {
  description () {
    return 'Support for HTTP Conditional requests.'
  }

  optionDefinitions () {
    return {
      name: 'no-conditional-get',
      alias: 'n',
      type: Boolean,
      description: 'Disable Conditional-GET caching. Force-loads resources from disk each request.'
    }
  }

  middleware (config) {
    const mwOptions = {}
    if (config.noConditionalGet) mwOptions.noConditionalGet = true
    this.emit('verbose','middleware.conditional-get.config', mwOptions)
    if (!mwOptions.noConditionalGet) {
      return [
        require('koa-conditional-get')(),
        require('koa-etag')()
      ]
    }
  }
}

module.exports = ConditionalGet
