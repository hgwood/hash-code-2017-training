const _ = require('lodash')

module.exports = function isValidSlice ({pizza, minIngredients}, {r1, c1, r2, c2}) {
  const ingredients = _.flatMap(_.range(r1, r2 + 1), r => {
    return _.map(_.range(c1, c2 + 1), c => {
      return pizza[r][c]
    })
  })
  const partitionedIngredients = _.partition(ingredients, ingredient => ingredient === 'M')
  return partitionedIngredients[0].length >= minIngredients && partitionedIngredients[1].length >= minIngredients
}
