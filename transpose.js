const _ = require('lodash')

module.exports = function transpose(matrix) {
  return _.times(matrix[0].length, i => matrix.map(row => row[i]))
}
