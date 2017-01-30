const _ = require('lodash')

module.exports = {
  /**
   * @returns a flatten array of all cells in the grid (cell is object with props x, y, value).
   */
  cells: lift(_.flatMap, _.map, (value, x, y) => ({value, x, y})),
  /**
   * Runs a function on each cell. Function takes params value, x, y, grid, row.
   */
  each: lift(_.each, _.each, (value, x, y, grid, row, f) => f(value, x, y, grid, row)),
  /**
   * Well, you know, map. Function takes same params as each.
   */
  map: lift(_.map, _.map, (value, x, y, grid, row, f) => f(value, x, y, grid, row))
}

function lift (fgrid, frow, fvalue) {
  return (grid, ...args) => {
    return fgrid(grid, (row, y) => {
      return frow(row, (value, x) => {
        return fvalue(value, x, y, grid, row, ...args)
      })
    })
  }
}
