var webpack = require('webpack');

module.exports = {
	entry: './demo4.js',
	output:{
		filename:'bundle.js',
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				exclude:'./node_modules/',
				loader:'babel',
				query:{
					presets:[
						"es2015",
						"react",
						"stage-0"
					]
				}
			}
		]
	},
	plugins:[
		new webpack.DllReferencePlugin({
			manifest:require('./manifest.json'),
			context:__dirname,
		})
	]
}