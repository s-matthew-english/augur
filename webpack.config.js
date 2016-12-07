const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
	BUILD: path.resolve(__dirname, 'build'),
	APP: path.resolve(__dirname, 'src')
};

// COMMON CONFIG
let config = {
	entry: {
		main: ['./src/main'],
		styles: './src/styles',
		vendor: [
			'react',
			'react-dom',
			'redux',
			'redux-thunk'
		]
	},
	output: {
		path: PATHS.BUILD,
		filename: '[name].js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.pug', '.less', '.js', '.jsx', '.json'],
		alias: {
			modules: path.resolve(PATHS.APP, 'modules'),
			utils: path.resolve(PATHS.APP, 'utils')
		}
	},
	module: {
		loaders: [
			{
				test: /\.pug/,
				loader: 'pug-loader'
			},
			{
				test: /\.woff/,
				loader: 'file-loader'
			},
			{
				test: /\.jsx?/,
				loader: 'babel-loader'
			},
			{
				test: /\.json/,
				loader: 'json-loader'
			}
		]
	},
	stats: {
		color: true
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new CopyWebpackPlugin([
			{
				from: path.resolve(PATHS.APP, 'splash.css'),
				to: PATHS.BUILD
			},
			{
				from: path.resolve(PATHS.APP, 'env.json'),
				to: PATHS.BUILD
			},
			{
				from: path.resolve(PATHS.APP, 'manifest.json'),
				to: PATHS.BUILD
			},
			{
				from: path.resolve(PATHS.APP, 'assets/fonts'),
				to: path.resolve(PATHS.BUILD, 'assets/fonts')
			},
			{
				from: path.resolve(PATHS.APP, 'assets/images'),
				to: path.resolve(PATHS.BUILD, 'assets/images')
			},
			{
				from: path.resolve(__dirname, 'node_modules/airbitz-core-js-ui/assets'),
				to: path.resolve(PATHS.BUILD, 'abcui')
			}
		]),
		new HtmlWebpackPlugin({
			template: path.resolve(PATHS.APP, 'index.pug')
		})
	],
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	},
};

// DEVELOPMENT SPECIFIC CONFIG
if (process.env.NODE_ENV !== 'production') {
	config = merge(config, {
		entry: {
			main: [
				'react-hot-loader/patch',
				'webpack-hot-middleware/client',
			]
		},
		module: {
			loaders: [
				{
					test: /\.less/,
					loaders: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader', 'import-glob-loader']
				}
			]
		},
		devtool: 'eval-source-map',
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoErrorsPlugin(),
		]
	});
}

// PRODUCTION SPECIFIC CONFIG
if (process.env.NODE_ENV === 'production') {
	config = merge(config, {
		entry: {
			main: './src/main'
		},
		module: {
			loaders: [
				{
					test: /\.less/,
					loaders: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!postcss-loader!less-loader!import-glob-loader' })
				}
			]
		},
		devtool: 'source-map',
		plugins: [
			new ExtractTextPlugin('[name].css'),
			new webpack.optimize.UglifyJsPlugin({
				comments: false,
				dropConsole: true
			})
		]
	});
}

const WEBPACK_CONFIG = config;

module.exports = WEBPACK_CONFIG;
