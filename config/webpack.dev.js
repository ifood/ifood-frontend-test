const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'inline-source-map',

  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8080,
    inline: true,
    historyApiFallback: true,
  },

  mode: 'development',
})
