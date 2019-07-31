const plugins = [
  'react-hot-loader/babel'
]

const presets = [
  [
    '@babel/env', {
      useBuiltIns: 'usage',
    },
  ],
  '@babel/preset-react',
  '@babel/preset-typescript',
]


module.exports = { 
  plugins,
  presets, 
}
