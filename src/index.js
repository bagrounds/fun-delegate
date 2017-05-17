/**
 *
 * @module fun-delegate
 */
;(function () {
  'use strict'

  /* imports */
  var stringify = require('stringify-anything')
  var curry = require('fun-curry')

  /* exports */
  module.exports = curry(delegate)

  /**
   *
   * @function module:fun-delegate.delegate
   *
   * @param {String} method - name of method to delegate to
   * @param {Array} inputs - arguments to pass to method
   * @param {Object} target - to call method on
   *
   * @return {*} target[method](...inputs)
   */
  function delegate (method, inputs, target) {
    checkInputs(method, inputs, target)

    return target[method].apply(target, inputs)
  }

  function checkInputs (method, inputs, target) {
    if (typeof method !== 'string') {
      throw Error(stringify(method) + ' should be a string')
    }

    if (!(inputs instanceof Array)) {
      throw Error(stringify(inputs) + ' should be an Array of arguments')
    }

    if (target == null) {
      throw Error('cannot delegate to ' + stringify(target))
    }

    if (typeof target[method] !== 'function') {
      throw Error(stringify(target) + ' does not have a ' + method + ' method')
    }
  }
})()

