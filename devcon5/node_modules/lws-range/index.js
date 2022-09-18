class Range {
  description () {
    return 'Support for HTTP Range Requests.'
  }

  middleware () {
    return require('koa-range')
  }
}

module.exports = Range
