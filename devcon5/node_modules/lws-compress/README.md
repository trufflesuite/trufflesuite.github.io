[![view on npm](https://img.shields.io/npm/v/lws-compress.svg)](https://www.npmjs.org/package/lws-compress)
[![npm module downloads](https://img.shields.io/npm/dt/lws-compress.svg)](https://www.npmjs.org/package/lws-compress)
[![Build Status](https://badgen.net/david/dep/lwsjs/compress)](https://travis-ci.org/lwsjs/compress)
[![Dependency Status](https://david-dm.org/lwsjs/compress.svg)](https://david-dm.org/lwsjs/compress)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# lws-compress

Response compression middleware for lws. For usage instructions, see [here](https://github.com/lwsjs/local-web-server/wiki/How-to-use-response-compression).

Adds the following options to lws.

```
--compress, -z                 Serve gzip-compressed resources, where applicable.
--compress.threshold number    Minimum response size in bytes to apply compression. Defaults to 1024.
```

* * *

&copy; 2016-19 Lloyd Brookes \<75pound@gmail.com\>.
