const styleLoader = require('./style')
const babelLoader = require('./babel')

module.exports = env => ([
  ...styleLoader(env),
  babelLoader,
])
