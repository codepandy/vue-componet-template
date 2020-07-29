const path = require('path');
const webpack = require('webpack');

const config= {

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
}

if (process.env.NODE_ENV === 'production') {
  config.entry="./src/lib/index.js";
  config.devtool = '#source-map';
  config.output={
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    libraryTarget: "commonjs2",
  }
  config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}else{
  config.entry="./src/main.js";
  config.devtool= '#eval-source-map';
  config.output={
    path: path.resolve(__dirname, "dist"),
    publicPath:'dist',    // 这个是必须的，不配置生成不了内容
    filename: "build.js",
  }
}

module.exports=config;
