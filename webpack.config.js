const webpack = require('webpack')
const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('[name].bundle.css')

module.exports = {
  entry: {
    app: './src/client/index.js',
    styles: './src/client/styles/index.scss'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build/'
  },
  resolve: {
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./src')
    ]
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      use: [{
        loader: 'babel-loader',
        options: { 
          presets: ['react', 'env'] 
        }
      }]
    }, {
      test: /\.scss$/,
      loader: extractCSS.extract(['css-loader', 'sass-loader'])
    }]
  },
  plugins: [
    extractCSS
  ],
  devtool: 'source-map'
}
