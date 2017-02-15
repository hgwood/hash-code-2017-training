const debug = require('debug')('solve')
const _ = require('lodash')

module.exports = function solve (problem) {
  debug('start')
  return _(problem.pizza).map((line, y) => {
    debug(line, y)
    //debug("slice=>",sliceOk(line, problem.minIngredient))
    if(problem.maxSliceSize > line.length && sliceOk(line, problem.minIngredients)) {
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
  debug("mining", minIngredients)
  debug("slice", _.filter(slice, (l) => l === "M"))
  debug(_.filter(slice, (l) => l === "M").length)
  return _.filter(slice, (l) => l === "M").length >= minIngredients
        && _.filter(slice, (l) => l === "T").length >= minIngredients
}
