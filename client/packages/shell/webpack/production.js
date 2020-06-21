const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./common')

module.exports = merge(common, {
  mode: 'production',
  entry: ['./src/main.tsx'],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[hash].js'
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  optimization: {
    minimize: true,
    splitChunks: {
      name: true,
      chunks: 'all',
    }
  }
})
