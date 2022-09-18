[![view on npm](https://img.shields.io/npm/v/lws-conditional-get.svg)](https://www.npmjs.org/package/lws-conditional-get)
[![npm module downloads](https://img.shields.io/npm/dt/lws-conditional-get.svg)](https://www.npmjs.org/package/lws-conditional-get)
[![Build Status](https://travis-ci.org/lwsjs/conditional-get.svg?branch=master)](https://travis-ci.org/lwsjs/conditional-get)
[![Dependency Status](https://badgen.net/david/dep/lwsjs/conditional-get)](https://david-dm.org/lwsjs/conditional-get)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# lws-conditional-get

Conditional-Get support for [lws](https://github.com/lwsjs/lws). Wraps [koa-conditionalget](https://github.com/koajs/conditional-get). For usage instructions, see [here](https://github.com/lwsjs/local-web-server/wiki/How-to-use-HTTP-Conditional-Requests).

Adds the following options to lws.

```
--no-conditional-get, -n       Disable Conditional-GET caching. Force-loads resources from disk each
                               request.
```

* * *

&copy; 2017-19 Lloyd Brookes <75pound@gmail.com>.
