const { merge } = require("webpack-merge");

import common from "./webpack.main.common";

module.exports = () =>
  merge(common(), {
    mode: "production",
    target: "electron-main",
  });
