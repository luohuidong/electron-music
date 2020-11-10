const path = require("path");

module.exports = {
  test: /\.(png|svg|jpg|gif)$/,
  include: path.resolve(__dirname, "../../src"),
  use: [{
    loader: "file-loader",
    options: {
      name: 'img/[name][hash:8].[ext]'
    }
  }],
};
