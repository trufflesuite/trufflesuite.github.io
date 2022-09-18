class BodyParser {
  description () {
    return 'Parses the request body, making `ctx.request.body` available to downstream middleware.'
  }
  middleware () {
    return require('koa-bodyparser')()
  }
}

module.exports = BodyParser
