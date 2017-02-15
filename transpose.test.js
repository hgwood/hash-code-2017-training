/* eslint-env mocha */

const assert = require('assert')
const transpose = require('./transpose')

describe('transpose', function () {
  it('transposes square', function () {
    assert.deepEqual(transpose([[1, 2], [3, 4]]), [[1, 3], [2, 4]])
  })
  it('transposes rectangle', function () {
    assert.deepEqual(transpose([[1, 2, 3], [4, 5, 6]]), [[1, 4], [2, 5], [3, 6]])
  })
})
