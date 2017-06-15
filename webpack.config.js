var webpack = require('webpack');

var webpackConfig = {
	entry: "./client/index.js",
	output: {
		path: "build",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				test: /\.js$/
			},
			{
				loaders: ["style-loader", "css-loader", "sass-loader"],
				test: /\.scss$/
			},
			{
			loader: 'babel',
				query: {
				presets: ['es2015', 'react', 'stage-2'],
				plugins: ["transform-runtime"]
			}
			}
		]
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
		new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
	]
};

module.exports = webpackConfig;
