const path = require('path')
const webpack = require('webpack')

const isProduction = process.env.NODE_ENV === 'production'

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin({
  filename: '[name].bundle.css',
  disable: !isProduction
})

module.exports = {
  devtool: 'cheap-module-source-map',
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: [
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      path.join(__dirname, 'src', 'client', 'index.js')
    ],
    styles: [
      'webpack-hot-middleware/client',
      path.join(__dirname, 'src', 'client', 'styles', 'index.scss')
    ]
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
          presets: ['react', 'env'],
          plugins: ['transform-runtime']
        }
      }]
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: extractCSS.extract({
        use: ['style-loader', 'css-loader', 'sass-loader'],
        fallback: 'style-loader'
      })
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    extractCSS
  ]
}
