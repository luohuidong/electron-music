const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const getLoader = require('./loader/')

function getPath(folderPath) {
  const result = path.resolve(__dirname, `../src/renderer${folderPath}`)
  console.log("TCL: getPath -> result", result)
  return result
}

module.exports = env => {
  return {
    entry: './src/renderer/index.tsx',
    output: {
      filename: 'js/[name].[hash].js', // add a unique hash based on the content of an asset
      path: path.resolve(__dirname, '../dist/webpack')
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
      symlinks: false,
      alias: {
        'react-dom': '@hot-loader/react-dom',
        'Components': getPath('/components/'),
        'Styles': getPath('/styles/'),
        'Api': getPath('/api/'),
        'Store': getPath('/store/')
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        favicon: 'public/favicon.ico'
      }),
    ],
    module: {
      rules: [...getLoader(env)]
    }
  }
}

