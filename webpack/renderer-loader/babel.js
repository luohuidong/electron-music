module.exports = {
  test: /\.(js|tsx?)$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
  }
}
