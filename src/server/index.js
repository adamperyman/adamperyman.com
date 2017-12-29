import express from 'express'
import bodyParser from 'body-parser'

import logger from './logger'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.HTTP_PORT = process.env.HTTP_PORT || 3000

const onUnhandledError = err => {
  try {
    logger.error(err)
  } catch (error) {
    console.log('Logger Error: ', error) // eslint-disable-line no-console
    console.log('Application Error: ', err) // eslint-disable-line no-console
  }

  process.exit(1)
}

process.on('unhandledRejection', onUnhandledError)
process.on('uncaughtException', onUnhandledError)

const setupAppRoutes = process.env.NODE_ENV === 'development'
  ? require('./middleware/development').default
  : require('./middleware/production').default

const app = express()

app.set('env', process.env.NODE_ENV)
logger.info(`Application env: ${process.env.NODE_ENV}.`)

app.use(logger.expressMiddleware)
app.use(bodyParser.json())

setupAppRoutes(app)

app.listen(process.env.HTTP_PORT, () => {
  logger.info(`HTTP server is now running on http://localhost:${process.env.HTTP_PORT}`)
})
