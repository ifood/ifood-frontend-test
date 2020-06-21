const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./common')

const BUILD_PATH = path.resolve(__dirname, '../build')

module.exports = merge(common, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    './src/main.tsx'
  ],
  output: {
    path: BUILD_PATH,
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: ['source-map-loader'],
        enforce: 'pre'
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    contentBase: BUILD_PATH
  },
  watch: true
})
