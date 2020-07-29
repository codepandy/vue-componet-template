const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig =require('./webpack.base.js');

const config= merge(baseConfig,{
  entry:"./src/lib/index.js",
  output:{
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    libraryTarget: "commonjs2",
  },
  devtool: '#source-map'
});

module.exports=config;
