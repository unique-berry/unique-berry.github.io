const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
	entry:{
		equip:'./src/js/index.js'
	},
	output:{
		path: path.resolve(__dirname,'dist')
	},
	module:{
		rules:[
			{
				test:/\.(jpg|png|gif|jpeg)$/,
				use:{
					loader:'url-loader',
					options:{
						name:'[name].[ext]',
						outputPath:'images/',
						limit:2048
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template:'./src/index.html'
		}),
		new CleanWebpackPlugin(),
		// new webpack.ProvidePlugin({
		// 	$: 'jquery'
		// })
	]
}