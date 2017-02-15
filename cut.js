const _ = require('lodash')

module.exports = function (problem, sliceSizes) {
  return _.map(sliceSizes, ([height, width]) => {
    const xs = _.range(0, problem.ncolumns - width + 1, width)
    const ys = _.range(0, problem.nrows - height + 1, height)
    return _.flatMap(xs, x => _.map(ys, y => ({r1: y, r2: y + height - 1, c1: x, c2: x + width - 1})))
  })
}
