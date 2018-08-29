/**
 * Created by betty on 8/24/18.
 */
"use strict";

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './client/index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname),
    publicPath: "/"
  },
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin(),
  ]
};