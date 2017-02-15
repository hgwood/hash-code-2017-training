/* eslint-env mocha */

const assert = require('assert')
const validSlice = require('./valid-slice')

describe('validSlice', function () {
  it('valid slice', function () {
    assert.equal(validSlice({
      pizza: [
        ['T', 'T', 'T'],
        ['M', 'M', 'M']
      ],
      minIngredients: 2
    }, {
      r1: 0,
      c1: 0,
      r2: 1,
      c2: 1
    }), true)
  })
  it('invalid slice', function () {
    assert.equal(validSlice({
      pizza: [
        ['T', 'T', 'T'],
        ['M', 'M', 'M']
      ],
      minIngredients: 2
    }, {
      r1: 0,
      c1: 0,
      r2: 0,
      c2: 2
    }), false)
  })
})
