const assert = require('assert')
const fs = require('fs')
const debug = require('debug')('read')

module.exports = function read (filePath) {
  const textFromInputFile = fs.readFileSync(filePath, 'utf8')
  debug(`read ${textFromInputFile.length} chars from ${filePath}`)
  return module.exports.parse(textFromInputFile)
}

module.exports.parse = function (textFromInputFile) {
  const [header, ...pizza] = textFromInputFile.split('\n').filter(line => line)
  const [nrows, ncolumns, minIngredients, maxSliceSize] = header.trim().split(' ').map(i => Number(i))
  const result = {
    nrows,
    ncolumns,
    minIngredients,
    maxSliceSize,
    pizza: pizza.map(row => row.trim().split(''))
  }
  assert.equal(typeof nrows, 'number', 'expected nrows to be a number')
  assert.equal(typeof ncolumns, 'number', 'expected ncolumns to be a number')
  assert.equal(typeof minIngredients, 'number', 'expected minIngredients to be a number')
  assert.equal(typeof maxSliceSize, 'number', 'expected maxSliceSize to be a number')
  assert.equal(typeof result.pizza, 'object', 'expected pizza to be an object')
  assert.equal(typeof result.pizza[0], 'object', 'expected pizza row to be an object')
  assert.equal(typeof result.pizza[0][0], 'string', 'expected pizza cell to be a string')
  return result
}
