[![view on npm](https://img.shields.io/npm/v/load-module.svg)](https://www.npmjs.org/package/load-module)
[![npm module downloads](https://img.shields.io/npm/dt/load-module.svg)](https://www.npmjs.org/package/load-module)
[![Build Status](https://travis-ci.org/75lb/load-module.svg?branch=master)](https://travis-ci.org/75lb/load-module)
[![Coverage Status](https://coveralls.io/repos/github/75lb/load-module/badge.svg)](https://coveralls.io/github/75lb/load-module)
[![Dependency Status](https://david-dm.org/75lb/load-module.svg)](https://david-dm.org/75lb/load-module)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

<a name="module_load-module"></a>

## load-module
Node's `require` with a few extra features:
- You can specify additional folders in which to search for modules
- You can specify a module prefix

**Example**  
```js
> const loadModule = require('load-module')

> loadModule('react-dom')

> loadModule('dom', { prefix: 'react-' })

> loadModule('something.js', { paths: '.' })

> loadModule('something.js', { paths: [ '.', '~/my-modules' ] })
```
<a name="exp_module_load-module--loadModule"></a>

### loadModule(request, [options]) ⏏
**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>string</code> | The module name, directory or file to load. |
| [options] | <code>object</code> |  |
| [options.paths] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | One or more additional directories in which to search for modules. For each path specified, both the path itself and `${path}/node_modules` will be searched. |
| [options.prefix] | <code>string</code> | Attempt to load the given module name with this prefix. Only useful where `request` is a module name. |


* * *

&copy; 2017-19
 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
