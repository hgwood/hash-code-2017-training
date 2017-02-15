/* eslint-env mocha */

const assert = require('assert')
const sliceShapes = require('./slice-shapes')

describe('sliceShapes', function () {
  it('finds slice shapes for min 1 max 5', function () {
    assert.deepEqual(sliceShapes(1, 5), [[1, 2], [1, 3], [1, 4], [1, 5], [2, 2]])
  })
})
