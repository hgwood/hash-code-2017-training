/* eslint-env mocha */

const assert = require('assert')
const cut = require('./cut')

describe('cut', function () {
  it('cuts', function () {
    assert.deepEqual(
      cut({nrows: 2, ncolumns: 4}, [[2, 2]]),
      [[{r1: 0, r2: 1, c1: 0, c2: 1}, {r1: 0, r2: 1, c1: 2, c2: 3}]])
  })
})
