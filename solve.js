const debug = require('debug')('solve')
const _ = require('lodash')
const transpose = require('./transpose')

module.exports = function solve (problem) {
  debug('start')
  return findSlicesByCol(problem)
}

function findSlicesByCol (problem) {
  problem.pizza = transpose(problem.pizza)
  let solve = findSlicesLineByLine(problem)
  return _.map(solve, ({r1, r2, c1, c2}) => { return {'r1': c1, 'r2': c2, 'c1': r1, 'c2': r2} })
}

function cutLineByLine (slice, x, y) {
  return {r1: y, r2: y, c1: x, c2: x + slice.length - 1}
}

function sliceOk (slice, minIngredients) {
  // TODO one line only
  return _.filter(slice, (l) => l === 'M').length >= minIngredients &&
        _.filter(slice, (l) => l === 'T').length >= minIngredients
}

function findSlicesLineByLine (problem) {
  return _(problem.pizza).map((line, y) => {
    let index = 0
    let slice
    if (problem.maxSliceSize > line.length && sliceOk(line, problem.minIngredients)) {
      // FIXME only works with maxSlices > line.length
      return cutLineByLine(line, 0, y)
    }
    while (index < line.length - 1) {
      slice = _.slice(line, index, Math.min(index + problem.maxSliceSize, line.length))
      if (sliceOk(slice, problem.minIngredients)) {
        return cutLineByLine(slice, index, y)
      } else {
        index++
      }
    }
  }).compact().value()
}
