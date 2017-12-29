const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.config.base')

const paths = {
  CLIENT: path.resolve(__dirname, '..', 'src', 'client')
}

module.exports = Object.assign({}, baseConfig, {
  devtool: 'cheap-module-source-map',
  plugins: baseConfig.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      template: path.join(paths.CLIENT, 'index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  ])
})
