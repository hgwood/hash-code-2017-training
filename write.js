const _ = require('lodash')
const fs = require('fs')
const debug = require('debug')('write')

module.exports = function write (path, solution) {
  writeLines(path, unparse(solution))
}

function writeLines (path, lines) {
  fs.writeFileSync(path, lines.join('\n'))
  debug(`wrote ${lines.length} lines to ${path}`)
}

// Format attendu :
// [
//   {
//     r1: 0,
//     c1: 0,
//     r2: 2,
//     c2: 1,
//   },
//   ...
// ]
function unparse (solution) {
  return [
    `${solution.length}`,
    ..._.map(solution, ({ r1, c1, r2, c2 }) => `${r1} ${c1} ${r2} ${c2}`)
  ]
}

module.exports.unparse = unparse
