const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

const webpackCommon = {
	output: {
		path: path.resolve(__dirname, './client/dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js', '.scss']
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					},
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './client/src/index.html',
			title: 'Ifood'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	]
};

const webpackDev = {
	mode: 'development',
	entry: [
		'react-hot-loader',
		'webpack-hot-middleware/client?overlay=false',
		'./client/src/index.js'
	],
	plugins: [new webpack.HotModuleReplacementPlugin()],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: [
							'react-hot-loader/babel',
							'@babel/plugin-proposal-class-properties'
						]
					}
				}
			}
		]
	}
};

const webpackProd = {
	mode: 'production',
	entry: ['./client/src/index.js'],
	optimization: {
		minimizer: [new MinifyPlugin(), new OptimizeCSSAssetsPlugin()]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ['@babel/plugin-proposal-class-properties']
					}
				}
			}
		]
	}
};

let webpackConfig;

if (isProduction) {
	webpackConfig = merge(webpackCommon, webpackProd);
} else {
	webpackConfig = merge(webpackCommon, webpackDev);
}

module.exports = webpackConfig;
