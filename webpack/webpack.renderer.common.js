const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const getLoader = require("./loader/index");

function getPath(folderPath) {
  const result = path.resolve(__dirname, `../src/renderer${folderPath}`);
  return result;
}

module.exports = (env) => ({
  target: "electron-renderer",
  mode: "development",
  entry: "./src/renderer/index.tsx",
  output: {
    filename: "js/[name][chunkhash:8].js", // add a unique hash based on the content of an asset
    path: path.resolve(__dirname, "../dist/dist-webpack/renderer"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    symlinks: false,
    alias: {
      "react-dom": "@hot-loader/react-dom",
      Components: getPath("/components/"),
      Styles: getPath("/styles/"),
      Api: getPath("/api/"),
      Store: getPath("/store/"),
      Types: getPath("/types/"),
      Utils: getPath("/utils"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
  ],
  module: {
    rules: [...getLoader(env)],
  },
  node: {
    __dirname: false, // 不让 webpack 对 __dirname 变量做处理
  },
});
