[![view on npm](https://img.shields.io/npm/v/node-version-matches.svg)](https://www.npmjs.org/package/node-version-matches)
[![npm module downloads](https://img.shields.io/npm/dt/node-version-matches.svg)](https://www.npmjs.org/package/node-version-matches)
[![Build Status](https://travis-ci.org/75lb/node-version-matches.svg?branch=master)](https://travis-ci.org/75lb/node-version-matches)
[![Dependency Status](https://david-dm.org/75lb/node-version-matches.svg)](https://david-dm.org/75lb/node-version-matches)
[![Coverage Status](https://coveralls.io/repos/github/75lb/node-version-matches/badge.svg)](https://coveralls.io/github/75lb/node-version-matches)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# node-version-matches

Returns true if the current node version matches the given semver expression.

```js
> const nodeVersionMatches = require('node-version-matches')

> // assuming we're using node version 10
> nodeVersionMatches('>=7.6.0')
true

> nodeVersionMatches('<7.6.0')
false

> // optional: pass in a specific node version as the second arg.
> nodeVersionMatches('<7.6.0', 'v4.0.0')
true
```

```
$ npm install node-version-matches
```

* * *

&copy; 2018 Lloyd Brookes \<75pound@gmail.com\>.
