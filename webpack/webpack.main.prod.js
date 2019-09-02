const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = env => {
  return {
    mode: 'production',

    entry: './src/main/index.js',

    output: {
      filename: 'main.js', // add a unique hash based on the content of an asset
      path: path.resolve(__dirname, '../dist-webpack/main')
    },

    target: 'electron-main',

    resolve: {
      extensions: [ '.js' ],
      symlinks: false, // increase resolving speed
    },

    plugins: [
      new CleanWebpackPlugin(),
    ],

    node: {
      __dirname: false,
    }
  }
}

