// TODO: 该配置目前打包会出错，经过验证是由 React 调试工具引起的错误。

import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default () => ({
  mode: 'production',

  entry: './src/main/index.ts',

  output: {
    filename: 'main.js', // add a unique hash based on the content of an asset
    path: path.resolve(__dirname, '../dist-webpack/main'),
  },

  target: 'electron-main',

  resolve: {
    extensions: ['.js'],
    symlinks: false, // increase resolving speed
  },

  plugins: [
    new CleanWebpackPlugin(),
  ],

  node: {
    __dirname: false,
  },
});
