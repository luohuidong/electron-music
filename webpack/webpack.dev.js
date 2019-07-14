const path = require('path')

const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = env => {
  return merge(common(env), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      // This tells webpack-dev-server to serve the files from the dist_webpack directory on localhost:8080.
      contentBase: path.join(__dirname, '../dist_webpack'),
    },
  })
}
