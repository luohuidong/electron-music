const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const getStyleLoader = require('./loader/style.js')

module.exports = env => {
  return {
    entry: './src/renderer/index.tsx',
    output: {
      filename: 'js/[name].[contenthash].js', // add a unique hash based on the content of an asset
      path: path.resolve(__dirname, '../dist_webpack')
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'public/index.html'
      })
    ],
    module: {
      rules: [
        ...getStyleLoader(env),
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    }
  }
}

