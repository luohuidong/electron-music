import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

import babelLoader from "./loader/babel";

export default () => ({
  entry: "./src/main/index.ts",
  output: {
    filename: "index.js", // add a unique hash based on the content of an asset
    path: path.resolve(__dirname, "../dist/dist-webpack/main"),
  },
  plugins: [new CleanWebpackPlugin()],
  node: {
    __dirname: false, // 不让 webpack 对 __dirname 变量做处理
    __filename: false,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [babelLoader],
  },
});
