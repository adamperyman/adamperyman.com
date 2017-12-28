import express from 'express'
import path from 'path'

import logger from './logger'

const app = express()

app.use(express.static(path.join('..', 'client')))

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.listen(PORT, () => {
  logger.info('listening on port: ' + PORT)
})
