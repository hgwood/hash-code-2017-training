const debug = require('debug')('solve')
const _ = require('lodash')

module.exports = function solve (problem) {
  debug('start')
  return _(problem.pizza).map((line, y) => {
    if(problem.maxSliceSize > line.length && sliceOk(line, problem.minIngredients)) {
      //FIXME only works with maxSlices > line.length
      return cut(line, 0,  y)
    }
  }).compact().value()
  debug('end')
}

function cut(slice, x, y) {
  return {r1:y, r2:y, c1:x, c2: x+slice.length - 1}
}

function sliceOk(slice, minIngredients) {
  //TODO one line only
  return _.filter(slice, (l) => l === "M").length >= minIngredients
        && _.filter(slice, (l) => l === "T").length >= minIngredients
}
