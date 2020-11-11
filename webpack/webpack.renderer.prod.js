const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const common = require('./webpack.renderer.common');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name][contenthash:8].css',
      chunkFilename: 'css/[id].css',
    }),
  ],
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single', // split runtime code into a separate chunk
    splitChunks: {
      cacheGroups: {
        vendor: {
          // extract third-party libraries
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    // minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
});
