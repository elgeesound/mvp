var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname + "/client/prod/src",
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./index.jsx",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators', 'transform-class-properties'],
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
        ]
      }
    ]
  },
  output: {
    path: __dirname + "/client/dist",
    filename: "bundle.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};