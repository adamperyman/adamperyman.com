import bodyParser from 'body-parser'
import express from 'express'
import morgan from 'morgan'
import path from 'path'
import webpack from 'webpack'

import webpackDevConfig from '../../webpack.config.js'
import { logger } from '../utils/logger'

const app = express()
const PORT = process.env.PORT || 8080

const indexPath = path.join(__dirname, '../public/index.html')
const publicPath = express.static(path.join(__dirname, '../../build'))

webpack(webpackDevConfig)

app.use('/build', publicPath)

app.use(morgan('combined', {
  stream: logger.stream
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
  res.sendFile(indexPath)
})

app.use((req, res) => {
  res.sendStatus(500)
})

app.listen(8080, () => {
  logger.info(`Now listening at http://localhost:${PORT}`)
})

process.on('uncaughtException', error => {
  logger.error('Uncaught Exception: ', error)
})

process.on('unhandledRejection', error => {
  logger.error('Unhandled Rejection: ', error)
})

