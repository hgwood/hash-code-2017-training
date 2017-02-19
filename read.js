const fs = require('fs')
const debug = require('debug')('read')
const jolicitron = require('jolicitron')

module.exports = function read (filePath) {
  const textFromInputFile = fs.readFileSync(filePath, 'utf8')
  debug(`read ${textFromInputFile.length} chars from ${filePath}`)
  return module.exports.parse(textFromInputFile)
}

module.exports.parse = function (textFromInputFile) {
  const parse = jolicitron((save, n) => [
    'nrows', 'ncolumns', 'minIngredients', 'maxSliceSize'
  ])
  const {parsedValue, remaining} = parse(textFromInputFile)
  const pizza = remaining.split('\n')
    .map(line => line.trim())
    .filter(line => line)
    .map(line => line.split(''))
  return Object.assign(parsedValue, {pizza})
}
