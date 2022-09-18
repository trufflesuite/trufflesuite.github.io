function nodeVersionMatches (semverExpression, version) {
  version = version || require('process').version
  const semver = require('semver')
  return semver.satisfies(version, semverExpression)
}

module.exports = nodeVersionMatches
