import express from 'express'
import path from 'path'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import webpackDevConfig from '../../webpack.config.js'

const app = express()
const PORT = process.env.PORT || 8080

const indexPath = path.join(__dirname, '../public/index.html')
const publicPath = express.static(path.join(__dirname, '../../build'))

app.use('/build', publicPath)

app.get('/', (req, res) => {
  res.sendFile(indexPath)
})

app.use((err, req, res) => {
  console.error(err.stack)
  res.sendStatus(500)
})

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackDevConfig)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler))
}

app.listen(8080, () => {
  console.log(`Now listening at http://localhost:${PORT}`)
})

process.on('uncaughtException', error => {
  console.error('Uncaught Exception: ', error)
})

process.on('unhandledRejection', error => {
  console.error('Unhandled Rejection: ', error)
})

