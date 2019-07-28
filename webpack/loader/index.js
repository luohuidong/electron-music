const styleLoader = require('./style')
const babelLoader = require('./babel')
const fileLoader = require('./file')

module.exports = env => ([
  ...styleLoader(env),
  babelLoader,
  fileLoader
])
