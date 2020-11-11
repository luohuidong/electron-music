const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.renderer.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // This tells webpack-dev-server to serve the files from the dist/webpack directory on localhost:8080.
    contentBase: path.join(__dirname, '../dist-webpack-renderer'),
    hot: true,
  },
});
