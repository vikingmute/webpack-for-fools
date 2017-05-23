const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    // 入口文件名称
    entry: './index.js',
    // 输出文件名称
    output: {
        filename: 'bundle.js'
    },
    module: {
    	rules: [
    		{ test: /\.css$/, use: [ { loader: 'style-loader' }, { loader: 'css-loader' } ]}
    	]
    },
    plugins: [
    	new webpack.optimize.UglifyJsPlugin(),
	    new HtmlWebpackPlugin({
			title: 'Test App',
	    })
  	]

}