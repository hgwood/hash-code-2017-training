const assert = require('assert')
const fs = require('fs')
const debug = require('debug')('read')
const jolicitron = require('jolicitron')

module.exports = function read (filePath) {
  const textFromInputFile = fs.readFileSync(filePath, 'utf8')
  debug(`read ${textFromInputFile.length} chars from ${filePath}`)
  const {parsedValue, remaining} = parse(textFromInputFile)
  assert(!remaining.trim(), 'Text from input file not completely parsed. The parser is not correct.')
  return parsedValue
}

const parse = module.exports.parse = jolicitron((save, n) => [
  // TODO: insert parser definition here
])
