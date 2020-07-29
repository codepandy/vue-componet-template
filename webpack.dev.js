const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig =require('./webpack.base.js');

const config= merge(baseConfig,{
  entry:"./src/main.js",
  output:{
    path: path.resolve(__dirname, "dist"),
    publicPath:'dist',
    filename: "build.js",
  },
  devtool: '#eval-source-map'
});

module.exports=config;
