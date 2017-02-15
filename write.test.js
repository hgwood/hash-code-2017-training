/* eslint-env mocha */

const assert = require('assert')
const unparse = require('./write').unparse

describe('unparse', function () {
  it('return solution', function () {
    const response = unparse(
      [
        { r1: 0, c1: 0, r2: 2, c2: 1 },
        { r1: 0, c1: 2, r2: 2, c2: 2 },
        { r1: 0, c1: 3, r2: 2, c2: 4 }
      ]
    )
    assert.deepEqual(response, [
      '3',
      '0 0 2 1',
      '0 2 2 2',
      '0 3 2 4'
    ])
  })
})
