const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const babelPresets = {
  presets: ['react', 'es2015']
};
const config = {
  entry: [
    // 'webpack/hot/dev-server',
    // 'webpack-dev-server/client?http://localhost:8000',
    './app/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  moudle: {
    loaders: [{
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=stage-0&presets[]=react'
      }, {
        test: /\.less$/,
        loader: 'style-loader,css-loader!less-loader'
      }, {
        test: /\.css/,
        loader: 'style!css'
      }]
      // loaders: [{
      //   'test': /\.js$/,
      //   'loader': 'babel',
      //   'exclude': path.resolve(__dirname, '/node_modules/')
      // }, {
      //   test: /\.css/,
      //   loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      // }]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'oh my god,suprise word GE'
    })
  ]
}

module.exports = config;