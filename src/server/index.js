import express from 'express'
import path from 'path'
import webpack from 'webpack'
import Log from 'log'

import webpackDevConfig from '../../webpack.config.js'

const app = express()
const PORT = process.env.PORT || 8080
const log = new Log('info')

const indexPath = path.join(__dirname, '../public/index.html')
const publicPath = express.static(path.join(__dirname, '../../build'))

webpack(webpackDevConfig)

app.use('/build', publicPath)

app.get('/', (req, res) => {
  res.sendFile(indexPath)
})

app.use((req, res) => {
  res.sendStatus(500)
})

app.listen(8080, () => {
  log.info(`Now listening at http://localhost:${PORT}`)
})

process.on('uncaughtException', error => {
  log.error('Uncaught Exception: ', error)
})

process.on('unhandledRejection', error => {
  log.error('Unhandled Rejection: ', error)
})

