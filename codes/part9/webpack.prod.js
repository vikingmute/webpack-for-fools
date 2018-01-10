const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
    // 入口文件名称
    entry: {
      index: './index.js',
      vendor: ['react', 'react-dom'],
    },
    // 输出文件名称
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
    },
    devtool: 'source-map',
    module: {
    	rules: [
    	   { 
           test: /\.css$/, 
           use: ExtractTextPlugin.extract({
             fallback: "style-loader",
             use: ['css-loader']
           })
         }
        ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true
      }),
      new ExtractTextPlugin("styles.css"),
      new webpack.optimize.CommonsChunkPlugin({
          name: "vendor"
      }),
      new HtmlWebpackPlugin({
        title: 'Test App',
      })
  	]
}