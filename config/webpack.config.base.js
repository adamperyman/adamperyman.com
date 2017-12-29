const webpack = require('webpack')
const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

const extractSass = new ExtractTextPlugin({
  filename: '[name].[hash].css',
  disable: !isProduction
})

const paths = {
  BUILD: path.resolve(__dirname, '..', 'build'),
  MODULES: path.resolve(__dirname, '..', 'node_modules'),
  SRC: path.resolve(__dirname, '..', 'src'),
  CLIENT: path.resolve(__dirname, '..', 'src', 'client'),
  SERVER: path.resolve(__dirname, '..', 'src', 'server')
}

module.exports = {
  entry: path.join(paths.CLIENT, 'app.js'),
  output: {
    publicPath: '/',
    path: path.join(paths.BUILD, 'client'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [ 'babel-loader' ]
    }, {
      test: /\.s?css$/,
      use: extractSass.extract({
        fallback: {
          loader: 'style-loader',
          options: { sourceMap: !isProduction }
        },
        use: [{
          loader: 'css-loader',
          options: { sourceMap: !isProduction }
        }, {
          loader: 'sass-loader',
          options: { sourceMap: !isProduction }
        }]
      })
    }, {
      test: /\.(svg|png|jpg|gif)$/,
      use: [ 'file-loader' ]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader', 'eslint-loader']
    }]
  },
  plugins: [
    extractSass,
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => {
        let isCss = module.resource && (/^.*\.(css|scss)$/).test(module.resource)

        if (isCss) {
          return false
        }

        return module.context && module.context.includes('node_modules')
      }
    })
  ],
  resolve: {
    extensions: [ '.js', '.jsx' ],
    modules: [
      paths.MODULES,
      paths.SRC
    ]
  }
}
