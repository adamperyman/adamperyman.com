import webpack from 'webpack'
import path from 'path'

import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import webpackConfig from '../../../config/webpack.config.dev.js'

const compiler = webpack(webpackConfig)

export default app => {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true
    }
  }))

  app.use(webpackHotMiddleware(compiler))

  app.get('*', (req, res) => res.sendFile(path.resolve('build', 'client', 'index.html')))
}
