var webpack = require("webpack")

var jsLoaders = ['babel']

//add hot reloading for development
if (process.env.NODE_ENV === 'development') {
  jsLoaders.unshift('react-hot')
} 


module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/public/dist',
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: jsLoaders
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: jsLoaders
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'scss']
  }
}