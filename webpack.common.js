/**
 * Created by betty on 8/30/18.
 */
"use strict";


const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  module: {
    rules: [
      {
        test: /\.js$|.jsx$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'], //babel-preset-es2015,babel-preset-react , jsx的解析
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname),
    publicPath: "/"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:path.resolve(__dirname, './index.html'),
      inject: true,
      entry: './client/index.js',
    }),
  ]
};