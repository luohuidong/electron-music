const styleLoader = require('./style')
const babelLoader = require('./babel')
const typescriptLoader = require('./typescript')
const fileLoader = require('./file')

module.exports = env => ([
  ...styleLoader(env),
  babelLoader,
  typescriptLoader,
  fileLoader
])
