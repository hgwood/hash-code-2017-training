/* eslint-env mocha */

const assert = require('assert')
const {parse} = require('./read')

describe('parse', function () {
  it('parses correctly', function () {
    const textFromInputFile = `
      1 2 3 4
      TTTMMM
      MTTMMT
    ` // TODO: insert test input here
    assert.deepEqual(parse(textFromInputFile), {
      // TODO: insert expected output here
      nrows: 1,
      ncolumns: 2,
      minIngredients: 3,
      maxSliceSize: 4,
      pizza: [
        ['T', 'T', 'T', 'M', 'M', 'M'],
        ['M', 'T', 'T', 'M', 'M', 'T']
      ]
    })
  })
})
