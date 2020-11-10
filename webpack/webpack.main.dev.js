const { merge } = require("webpack-merge");

const common = require("./webpack.main.common");

module.exports = () =>
  merge(common(), {
    mode: "development",
    target: "electron-main",
    devtool: "inline-source-map",
  });
