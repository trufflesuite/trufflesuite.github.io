[![view on npm](https://img.shields.io/npm/v/lws-log.svg)](https://www.npmjs.org/package/lws-log)
[![npm module downloads](https://img.shields.io/npm/dt/lws-log.svg)](https://www.npmjs.org/package/lws-log)
[![Build Status](https://travis-ci.org/lwsjs/log.svg?branch=master)](https://travis-ci.org/lwsjs/log)
[![Dependency Status](https://badgen.net/david/dep/lwsjs/log)](https://david-dm.org/lwsjs/log)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# lws-log
Logging middleware for [lws](https://github.com/lwsjs/lws), wrapping [morgan](https://github.com/expressjs/morgan). See [here](https://github.com/lwsjs/local-web-server/wiki/How-to-output-an-access-log) for usage information.

Adds the following options to lws.

```
--log.format, -f string        Possible values: 'stats', 'logstalgia' or anything defined by
                               https://github.com/expressjs/morgan, typically 'dev', 'combined', 'short',
                               'tiny' or a custom format (e.g. ':method -> :url')
```

* * *

&copy; 2016-19 Lloyd Brookes \<75pound@gmail.com\>.
