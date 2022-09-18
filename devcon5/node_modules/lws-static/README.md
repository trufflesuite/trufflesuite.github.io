[![view on npm](https://img.shields.io/npm/v/lws-static.svg)](https://www.npmjs.org/package/lws-static)
[![npm module downloads](https://img.shields.io/npm/dt/lws-static.svg)](https://www.npmjs.org/package/lws-static)
[![Build Status](https://travis-ci.org/lwsjs/static.svg?branch=master)](https://travis-ci.org/lwsjs/static)
[![Dependency Status](https://badgen.net/david/dep/lwsjs/static)](https://david-dm.org/lwsjs/static)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# lws-static

Lws middleware plugin to serve static files, wraps [koa-static](https://github.com/koajs/static). See [here](https://github.com/lwsjs/local-web-server/wiki/How-to-serve-static-files) for usage instrutions.

Adds the following options to `lws`.

<pre><code>
--directory, -d <u>path</u>           Root directory, defaults to the current directory.
--static.maxage <u>number</u>         Cache max-age (in seconds) applied to all resources served.
--static.defer                 If true, serves after `await next`, allowing any downstream middleware to
                               respond first.
--static.index <u>path</u>            Default file name, defaults to `index.html`.
--static.extensions <u>ext</u>        One or more default filename extensions. For example, if you set
                               `--static.extensions html` and request `/page` then the server will look for
                               both `page` and `page.html` on disk, serving the latter.
</pre></code>

* * *

&copy; 2016-19 Lloyd Brookes \<75pound@gmail.com\>.
