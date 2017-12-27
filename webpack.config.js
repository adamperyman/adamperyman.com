const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

const isProduction = process.env.NODE_ENV === 'production'

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  PUBLIC: path.resolve(__dirname, 'public'),
  CLIENT: path.resolve(__dirname, 'src/client')
};

const plugins = [
  extractSass,
  new HtmlWebpackPlugin({
    template: path.join(paths.PUBLIC, 'index.html')
  })
]

if (isProduction) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
  );
}

module.exports = {
  devtool: 'source-map',
  entry: path.join(paths.CLIENT, 'index.js'),
  output: {
      path: paths.DIST,
      filename: 'app.bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [ 'babel-loader' ]
    }, {
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true }
        }],
        fallback: 'style-loader'
      })
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [ 'file-loader' ]
    }]
  },
  plugins: plugins,
  resolve: {
    extensions: [ '.js', '.jsx' ],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src')
    ]
  }
};
