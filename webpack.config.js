var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});


module.exports = {
	entry: __dirname + '/app/index.js',
	module: {
		loaders: [
			{
				loader: 'file-loader',
				exclude: [
					/\.html$/,
					/\.(js|jsx)$/,
					/\.(css|less)$/,
					/\.json$/,
					/\.bmp$/,
					/\.gif$/,
					/\.jpe?g$/,
					/\.png$/,
				],
				options: {
					name: '[path][name].[ext]',
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
				    presets: [
				        "react",
				        "es2015",
								"stage-2"
				    ],
				    plugins: [
				        "transform-class-properties"
				    ]
				},
			},
			{
                test: /\.css$/,
        		loader: [ 'style-loader', 'css-loader' ]
            }
		]
	},
	output: {
		filename: 'transformed.js',
		path: __dirname + '/build'
	},
	plugins: [HTMLWebpackPluginConfig]
};
