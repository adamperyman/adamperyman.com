const webpack = require('webpack')
const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('[name].bundle.css')

module.exports = {
  context: path.resolve(__dirname, './'),
  entry: {
    app: './src/client/index.js',
    styles: './src/client/styles/index.scss'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build'
  },
  resolve: {
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./src')
    ]
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname,'src/public'),
  },
  module: {
    rules: [{
      test: /\.js$/,
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
  ]
}
