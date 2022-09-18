[![view on npm](https://img.shields.io/npm/v/lws-spa.svg)](https://www.npmjs.org/package/lws-spa)
[![npm module downloads](https://img.shields.io/npm/dt/lws-spa.svg)](https://www.npmjs.org/package/lws-spa)
[![Build Status](https://travis-ci.org/lwsjs/spa.svg?branch=master)](https://travis-ci.org/lwsjs/spa)
[![Dependency Status](https://badgen.net/david/dep/lwsjs/spa)](https://david-dm.org/lwsjs/spa)
[![Coverage Status](https://coveralls.io/repos/github/lwsjs/spa/badge.svg)](https://coveralls.io/github/lwsjs/spa)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# lws-spa

[lws](https://github.com/lwsjs/lws) middleware plugin adding support for Single Page Applications. For usage instructions, see [here](https://github.com/lwsjs/local-web-server/wiki/How-to-serve-a-Single-Page-Application-(SPA)).

Adds the following options to lws.

```
--spa, -s file                 Path to a Single Page App, e.g. app.html.
--spa.asset-test RegExp        A regular expression to identify an asset file. Defaults to ".", meaning the
                               server will only read from disk if the requested path contains a ".". This
                               option is more efficient than `spa.asset-test-fs`.
--spa.asset-test-fs            Use the filesystem to identify an asset file. If the file exists on disk,
                               serve it else return the SPA. If specified, `spa.asset-test` will be ignored.
                               This option is less efficient but more reliable than `spa.asset-test`.
```

* * *

&copy; 2016-19 Lloyd Brookes \<75pound@gmail.com\>.
