const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  // production mode does minification by default in webpack 4
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              minimize: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              // hack to make postcss works correctly with sass-loader
              plugins: () => [],
            },
          },
          'resolve-url-loader',
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    // creates a separated css file to allow an optimized load by webview or browser
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(js|css)$'),
      threshold: 0,
      minRatio: 0.8,
    }),
  ],
});
