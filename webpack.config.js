const { join } = require('path');

const paths = {
  styles: join(__dirname, '..', 'src', 'styles'),
};

const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: ['node_modules', paths.styles],
            },
          },
        ],
      },
    ],
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    htmlPlugin,
  ],
};
