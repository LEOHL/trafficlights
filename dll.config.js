var webpack = require('webpack');

module.exports = {
	entry:{
		vendors:['react','react-dom','redux','react-redux'],
	},
	output:{
		filename:'[name].js',
		path:__dirname,
		library:'[name]'
	},
	plugins:[
		new webpack.DllPlugin({
			path:'./manifest.json',
			context:__dirname,
			name:'[name]'
		})
	]
}