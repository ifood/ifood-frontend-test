const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');

module.exports = merge(common, {
  mode: 'development',
  serve: {
    add: (app) => {
      app.use(convert(history({})));
    },
    clipboard: false,
    dev: {
      publicPath: '/',
    },
    host: '0.0.0.0',
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              // hack to make postcss works correctly with sass-loader
              plugins: () => [],
            },
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  plugins: [
    // Don't emmit build when there was an error while compiling
    // No assets are emitted that include errors
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});
