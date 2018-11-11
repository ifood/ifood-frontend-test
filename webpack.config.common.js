const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH_ROOT = path.resolve('.');
const PATH_SOURCE = path.resolve('app');
const PATH_BUILD = path.resolve('build');
const PATH_INDEX_HTML = path.resolve(PATH_SOURCE, 'index.html');
const PATH_IMAGES = path.resolve(PATH_SOURCE, 'images');
const PATH_STYLES = path.resolve(PATH_SOURCE, 'styles');
const PATH_PROVIDERS = path.resolve(PATH_SOURCE, 'providers')
const NODE_ENV = process.env.NODE_ENV || 'development'
const cleanOptions = { root: PATH_ROOT };
const cleanPaths = [PATH_BUILD];

module.exports = {
  entry: path.join(PATH_SOURCE, 'main.js'),
  module: {
    rules: [
      // Babel loader
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader' ,
      },
      {
        test: /\.(png|svg|jpg|gif|eot|ttf|woff|woff2)$/,
        exclude: /node_modules/,
        use: 'file-loader',
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true,
          },
        }],
      },
    ],
  },
  output: {
    filename: '[name].bundle.[hash].js',
    publicPath: '/',
    path: PATH_BUILD,
  },
  plugins: [
    // Injects env variables to our app
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(NODE_ENV) },
    }),
    // Clears old stuff
    new CleanWebpackPlugin(cleanPaths, cleanOptions),
    // Builds index.html
    new HtmlWebpackPlugin({
      template: PATH_INDEX_HTML,
      path: PATH_BUILD,
      filename: 'index.html',
      hash: true,
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        useShortDoctype: true,
      },
    }),
  ],
  resolve: {
    alias: {
      Images: PATH_IMAGES,
      Styles: PATH_STYLES,
      Providers: PATH_PROVIDERS,
    },
  },
};
