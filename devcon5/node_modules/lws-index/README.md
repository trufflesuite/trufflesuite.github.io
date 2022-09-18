[![view on npm](https://img.shields.io/npm/v/lws-index.svg)](https://www.npmjs.org/package/lws-index)
[![npm module downloads](https://img.shields.io/npm/dt/lws-index.svg)](https://www.npmjs.org/package/lws-index)
[![Build Status](https://travis-ci.org/lwsjs/index.svg?branch=master)](https://travis-ci.org/lwsjs/index)
[![Dependency Status](https://badgen.net/david/dep/lwsjs/index)](https://david-dm.org/lwsjs/index)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# lws-index

[Lws](https://github.com/lwsjs/lws) middleware plugin to serve directory listings. Wraps [serve-index](https://github.com/expressjs/serve-index), typically used alongside [lws-static](https://github.com/lwsjs/static).

Adds the following options to lws.

```
--index.root path              Index root directory, defaults to the value of --directory or the current directory.
--index.hidden                 Show hidden files.
--index.view name              Display mode, either `tiles` or `details`. Defaults to tiles.
```

* * *

&copy; 2016-19 Lloyd Brookes \<75pound@gmail.com\>.
