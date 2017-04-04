const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const isProduction = process.env.NODE_ENV === 'production'

const clientUniversalPlugins = []
const clientProdPlugins = []
const clientDevPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
]

module.exports = [{
  name: 'server',
  entry: [
    path.join(__dirname, 'src', 'server', 'index.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/'
  },
  target: 'node',
  externals: nodeExternals(),
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader'
      }]
    }]
  }
}, {
  name: 'client',
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src', 'client', 'index.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  plugins: isProduction
    ? clientUniversalPlugins.concat(clientProdPlugins)
    : clientUniversalPlugins.concat(clientDevPlugins)
}]

