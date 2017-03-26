const webpack = require('webpack')
const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, './'),
  entry: {
    app: './src/index.js',
    styles: './src/client/styles/index.scss'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build'
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
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './public/styles/styles.css', 
      allChunks: true
    })
  ]
}
