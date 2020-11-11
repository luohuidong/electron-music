const path = require('path')

module.exports = {
  test: /\.(js|tsx?)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
  },
};
