/**
 * Node's `require` with a few extra features:
 * - You can specify additional folders in which to search for modules
 * - You can specify a module prefix
 * @module load-module
 * @example
 * > const loadModule = require('load-module')
 *
 * > loadModule('react-dom')
 *
 * > loadModule('dom', { prefix: 'react-' })
 *
 * > loadModule('something.js', { paths: '.' })
 *
 * > loadModule('something.js', { paths: [ '.', '~/my-modules' ] })
 */

/**
 * @alias module:load-module
 * @param {string} - The module name, directory or file to load.
 * @param {object} [options]
 * @param {string|string[]} [options.paths] - One or more additional directories in which to search for modules. For each path specified, both the path itself and `${path}/node_modules` will be searched.
 * @param {string} [options.prefix] - Attempt to load the given module name with this prefix. Only useful where `request` is a module name.
 */
function loadModule (request, options) {
  if (typeof request !== 'string') {
    throw new Error('request expected')
  }
  options = options || {}
  const arrayify = require('array-back')
  const prefix = options.prefix
  const paths = options.paths ? arrayify(options.paths) : undefined
  const origModulePaths = module.paths
  if (paths && paths.length) {
    module.paths = module.paths.concat(paths)
  }
  let output = null

  if (prefix) {
    try {
      output = loadModule(`${prefix}${request}`, { paths })
    } catch (err) {
      if (err.code === 'MODULE_NOT_FOUND') {
        output = loadModule(request, { paths })
      } else {
        throw err
      }
    }
  } else {
    output = tryEachPath(request, { paths })
    if (output === null) {
      output = loadAsLocalPath(request, { paths })
    }
    if (output === null) {
      output = loadAsRegularRequire(request, { paths })
    }
  }

  module.paths = origModulePaths

  if (output === null) {
    const err = new Error('Cannot find ' + request)
    err.code = 'MODULE_NOT_FOUND'
    throw err
  } else {
    return output
  }
}

function loadAsLocalPath (request, options) {
  const path = require('path')
  let output
  try {
    output = require(path.resolve(request), options)
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      output = null
    } else {
      throw err
    }
  }
  return output
}

function loadAsRegularRequire (request, options) {
  let output
  try {
    /* workaround for node issue #28077 */
    if (options && options.paths) {
      output = require(require.resolve(request, options))
    } else {
      output = require(require.resolve(request))
    }
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      output = null
    } else {
      throw err
    }
  }
  return output
}

function tryEachPath (request, options) {
  const path = require('path')
  let output = null
  for (const p of options.paths || []) {
    const fullPath = path.resolve(p, request)
    output = loadAsRegularRequire(fullPath)
    if (output !== null) break
  }
  return output
}

module.exports = loadModule
