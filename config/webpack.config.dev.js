const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')

const baseConfig = require('./webpack.config.base')

const paths = {
  BUILD: path.resolve(__dirname, '..', 'build'),
  CLIENT: path.resolve(__dirname, '..', 'src', 'client')
}

module.exports = Object.assign({}, baseConfig, {
  entry: [
    'react-hot-loader/patch',
    `webpack-hot-middleware/client?http://localhost:${process.env.PORT}&reload=true`
  ].concat(baseConfig.entry),
  output: Object.assign({}, baseConfig.output, {
    hotUpdateMainFilename: 'hot-update.[hash].json',
    hotUpdateChunkFilename: 'hot-update.[hash].js'
  }),
  devtool: 'cheap-module-eval-source-map',
  plugins: baseConfig.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(paths.CLIENT, 'index.html'),
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(paths.BUILD, 'dev', 'client')
    })
  ])
})
