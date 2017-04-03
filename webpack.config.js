const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('[name].bundle.css')

module.exports = {
  devtool: 'cheap-module-source-map',
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: path.join(__dirname, 'src', 'client', 'app.js'),
    styles: path.join(__dirname, 'src', 'client', 'styles', 'index.scss')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src/client')
    ]
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: { 
          presets: ['react', 'env'] ,
          plugins: ['transform-runtime']
        }
      }]
    }, {
      test: /\.scss$/,
      loader: extractCSS.extract([
        'css-loader', 'sass-loader'
      ])
    }]
  },
  plugins: [
    extractCSS
  ]
}
