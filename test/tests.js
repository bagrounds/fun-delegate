;(function () {
  'use strict'

  /* imports */
  var arrange = require('fun-arrange')
  var predicate = require('fun-predicate')
  var funTest = require('fun-test')
  var fn = require('fun-function')
  var object = require('fun-object')

  var guardTests = [
    predicate.throwsWith(['valueOf', [], null]),
    predicate.throwsWith(['toUpperCase', '', 'a string']),
    predicate.throwsWith(['toUpperCase', [], []]),
    predicate.throwsWith([1, [], ''])
  ].map(object.of('predicate'))
    .map(object.merge({ inputs: [], contra: fn.k }))

  var functionalityTests = [
    [['split', ['.'], '1.2.3'], predicate.equalDeep([1, 2, 3])],
    [['toFixed', [2], 4], predicate.equal('4.00')]
  ].map(arrange({ inputs: 0, predicate: 1 }))

  /* exports */
  module.exports = functionalityTests.concat(guardTests)
    .map(funTest.sync)
})()

