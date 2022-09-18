[![view on npm](https://img.shields.io/npm/v/lws-rewrite.svg)](https://www.npmjs.org/package/lws-rewrite)
[![npm module downloads](https://img.shields.io/npm/dt/lws-rewrite.svg)](https://www.npmjs.org/package/lws-rewrite)
[![Build Status](https://travis-ci.org/lwsjs/rewrite.svg?branch=master)](https://travis-ci.org/lwsjs/rewrite)
[![Dependency Status](https://badgen.net/david/dep/lwsjs/rewrite)](https://david-dm.org/lwsjs/rewrite)
[![Coverage Status](https://coveralls.io/repos/github/lwsjs/rewrite/badge.svg)](https://coveralls.io/github/lwsjs/rewrite)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# lws-rewrite

[lws](https://github.com/lwsjs/lws) middleware plugin adding URL rewriting support. For usage instructions see [here](https://github.com/lwsjs/local-web-server/wiki/How-to-rewrite-URLs-to-local-or-remote-destinations).

Adds the following options to lws.

```
--rewrite, -r expression ...   A list of URL rewrite rules. For each rule, separate the 'from' and 'to'
                               routes with '->'. Whitespace surrounded the routes is ignored. E.g. '/from ->
                               /to'.
```

* * *

&copy; 2016-19 Lloyd Brookes \<75pound@gmail.com\>.
