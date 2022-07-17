const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const WebpackPlugin1 = require('./plugins/webpack-plugin-1');
const WebpackPlugin2 = require('./plugins/webpack-plugin-2');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'custom-plugin'
    }),
    new CleanWebpackPlugin(),
    new WebpackPlugin2({msg: '第一个自定义插件，yyds！'})
  ]
}