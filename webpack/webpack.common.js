const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const getLoader = require('./loader/')

module.exports = env => {
  return {
    entry: './src/renderer/index.tsx',
    output: {
      filename: 'js/[name].[hash].js', // add a unique hash based on the content of an asset
      path: path.resolve(__dirname, '../dist/webpack')
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
      symlinks: false,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        favicon: 'public/favicon.ico'
      }),
    ],
    module: {
      rules: [...getLoader(env)]
    }
  }
}

