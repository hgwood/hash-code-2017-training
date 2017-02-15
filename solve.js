const debug = require('debug')('solve')
const _ = require('lodash')

module.exports = function solve (problem) {
  debug('start')
  return _(problem.pizza).map((line, y) => {
    let index = 0
    let slice
    if(problem.maxSliceSize > line.length && sliceOk(line, problem.minIngredients)) {
      //FIXME only works with maxSlices > line.length
      return cut(line, 0,  y)
    }
    while(index < line.length - 1) {
      slice = _.slice(line, index, Math.min(index + problem.maxSliceSize, line.length))
      debug("🍕 slice of pizza", slice)
      if(sliceOk(slice, problem.minIngredients)) {
        debug("👍 isOk!!!!! ", cut(slice, index, y))
        return cut(slice, index, y)
      } else {
        index++
      }
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
