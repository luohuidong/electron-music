const path = require('path')

module.exports = {
  test: /\.(png|svg|jpg|gif)$/,
  include: path.resolve(__dirname, 'src'),
  use: [
    'file-loader'
  ]
}
