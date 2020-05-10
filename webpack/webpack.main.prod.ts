import path from 'path';

import babelLoader from './loader/babel'

export default () => ({
  mode: 'production',

  target: 'electron-main',

  entry: './src/main/index.ts',

  output: {
    filename: 'main.js', // add a unique hash based on the content of an asset
    path: path.resolve(__dirname, '../dist-webpack/main'),
  },

  resolve: {
    extensions: ['.ts'],
    symlinks: false, // increase resolving speed
  },

  module: {
    rules: [babelLoader]
  },

  node: {
    __dirname: false,
  },
});
