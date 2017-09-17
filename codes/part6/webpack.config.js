const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
    // 入口文件名称
    entry: './index.js',
    // 输出文件名称
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
    	rules: [
    	   { test: /\.css$/, use: [ { loader: 'style-loader' }, { loader: 'css-loader' } ]}
    	]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: 'Test App',
      })
  	],
    devServer: {
        compress: true,
        hot: true,
        hotOnly: true,
    }
}
