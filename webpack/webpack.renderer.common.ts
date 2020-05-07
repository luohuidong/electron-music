import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import { Env } from './type';
import getLoader from './renderer-loader/index';

function getPath(folderPath: string) {
  const result = path.resolve(__dirname, `../src/renderer${folderPath}`);
  return result;
}

export default (env: Env) => ({
  entry: './src/renderer/index.tsx',

  output: {
    filename: 'js/[name].[hash].js', // add a unique hash based on the content of an asset
    path: path.resolve(__dirname, '../dist-webpack/renderer'),
  },

  target: "electron-renderer",

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    symlinks: false,
    alias: {
      'react-dom': '@hot-loader/react-dom',
      Components: getPath('/components/'),
      Styles: getPath('/styles/'),
      Api: getPath('/api/'),
      Store: getPath('/store/'),
      Types: getPath('/types/'),
      Utils: getPath('/utils'),
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
  ],

  module: {
    rules: [...getLoader(env)],
  },

  node: {
    __dirname: false, // 不让 webpack 对 __dirname 变量做处理
  },
});
