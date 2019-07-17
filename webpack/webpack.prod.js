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
        filename: 'css/[name].css',
        chunkFilename: 'css/[id].css',
      }),
    ],
    optimization: {
      runtimeChunk: 'single', // split runtime code into a separate chunk
      splitChunks: {
        cacheGroups: {
          vendor: { // extract third-party libraries
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    }
  })
}
