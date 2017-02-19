'use strict'

process.env.DEBUG = '*'

const _ = require('lodash')
const read = require('./read')
const write = require('./write')
const solve = require('./solve')

const files = _.slice(process.argv, 2)

if (_.isEmpty(files)) console.warn('No input files given.')

_.each(files, function (file) {
  const problem = read(file)
  const solution = solve(problem)
  write(`${file}.out.txt`, solution)
})
