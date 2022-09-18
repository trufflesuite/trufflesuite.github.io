const Transform = require('stream').Transform

class Clf extends Transform {
  _transform (chunk, enc, done) {
    const self = this
    const input = chunk.toString()
    input.split(/\n/).forEach(function (line) {
      const re = /([^ ]*) ([^ ]*) ([^ ]*) \[([^\]]*)\] "([^"]*)" ([^ ]*) ([^ ]*)/
      const matches = line.match(re)
      if (matches) {
        const obj = {
          remoteHost: matches[1],
          remoteLogName: matches[2],
          authUser: matches[3],
          date: new Date(matches[4]),
          request: matches[5],
          status: Number(matches[6]),
          bytes: Number(matches[7]) || 0
        }
        self.push(JSON.stringify(obj))
      }
    })
    done()
  }
}

module.exports = Clf
