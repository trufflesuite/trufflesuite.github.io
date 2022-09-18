[![view on npm](https://img.shields.io/npm/v/lws-cors.svg)](https://www.npmjs.org/package/lws-cors)
[![npm module downloads](https://img.shields.io/npm/dt/lws-cors.svg)](https://www.npmjs.org/package/lws-cors)
[![Build Status](https://travis-ci.org/lwsjs/cors.svg?branch=master)](https://travis-ci.org/lwsjs/cors)
[![Dependency Status](https://badgen.net/david/dep/lwsjs/cors)](https://david-dm.org/lwsjs/cors)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# lws-cors

Support for setting Cross-Origin Resource Sharing (CORS) headers to lws. For usage instructions, see [here](https://github.com/lwsjs/local-web-server/wiki/How-to-configure-Cross-Origin-Resource-Sharing-(CORS)).

Adds the following options to lws.

```
--cors.origin                  `Access-Control-Allow-Origin` value. Default is the request Origin header.
--cors.allow-methods           `Access-Control-Allow-Methods` value. Default is
                               "GET,HEAD,PUT,POST,DELETE,PATCH"
--cors.credentials             Adds `Access-Control-Allow-Credentials` header.
```

* * *

&copy; 2016-19 Lloyd Brookes \<75pound@gmail.com\>.
