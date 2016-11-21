const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
let env = process.env.WEBPACK_ENV;
let outputFile;
let plugins = [
  new ExtractTextPlugin("[name][hash:8].css"),
  new HtmlwebpackPlugin({
    title: 'suprise word GE',
    template: './app/index.html',
    filename: 'index.html'
  })
]
if (env === 'build') {
  plugins.push(new UglifyJsPlugin({
    minimize: true
  }));
  outputFile = 'bundle.min.js';
} else {
  outputFile = 'bundle.js';
}
const config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8000',
    './app/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: outputFile
  },
  devtool: 'source-map',
  module: {
    //加载器配置
    loaders: [{
      test: /\.less$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
    }, {
      test: /\.js/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=stage-0&presets[]=react'
    }]
  },
  plugins: plugins
}

module.exports = config;