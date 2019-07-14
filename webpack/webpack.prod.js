const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const common = require('./webpack.common.js')

module.exports = env => {
  return merge(common(env), {
    mode: 'production',
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ]
  })
}
