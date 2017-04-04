import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import express from 'express'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import AppRoutes from '../routes'
import template from './template'

import webpackConfig from '../../webpack.config.js'
import { logger } from '../utils/logger'
import { HTML } from '../constants'

const app = express()
const PORT = process.env.PORT || 3000
const isProduction = process.env.NODE_ENV === 'production'

const compiler = webpack(webpackConfig)

if (!isProduction) {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: '/'
  }))

  app.use(webpackHotMiddleware(compiler))
}

app.use('*', (req, res) => {
  const context = {}
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <AppRoutes />
    </StaticRouter>
  )

  res.send(template({
    title: HTML.MAIN_TITLE,
    body: html
  }))
})

app.use((req, res) => {
  res.sendStatus(500)
})

app.listen(PORT, () => {
  logger.info(`Now listening at http://localhost:${PORT}`)
})

process.on('uncaughtException', error => {
  logger.error('Uncaught Exception: ', error)
})

process.on('unhandledRejection', error => {
  logger.error('Unhandled Rejection: ', error)
})

