const _ = require('lodash')

module.exports = function sliceShapes (minIngredients, maxSliceSize) {
  const minArea = minIngredients * 2
  const range = _.range(1, maxSliceSize + 1)
  let shapes = _.compact(_.flatMap(_.map(range, height => {
    return _.map(range, width => {
      const area = width * height
      if (area >= minArea && area <= maxSliceSize) {
        return height <= width ? [height, width] : [width, height]
      }
      return null
    })
  })))
  shapes = _.uniqWith(shapes, _.isEqual)
  return shapes
}
