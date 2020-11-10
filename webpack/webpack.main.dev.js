const { merge } = require("webpack-merge");

const common = require("./webpack.main.common");

module.exports = () =>
  merge(common(), {
    mode: "development",
    devtool: "inline-source-map",
  });
