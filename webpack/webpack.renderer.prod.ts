import merge from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { Env } from './type';
import common from './webpack.renderer.common.js';

export default (env: Env) => merge(common(env), {
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
    moduleIds: 'hashed',
    runtimeChunk: 'single', // split runtime code into a separate chunk
    splitChunks: {
      cacheGroups: {
        vendor: { // extract third-party libraries
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
});
