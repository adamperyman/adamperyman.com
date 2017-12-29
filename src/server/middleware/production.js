import path from 'path'
import express from 'express'
import compression from 'compression'

const clientBuildPath = path.resolve(__dirname, '..', '..', '..', 'build', 'client')

export default app => {
  app.use(compression())
  app.use('/', express.static(clientBuildPath))

  app.get('*', (req, res) => res.sendFile(path.resolve(clientBuildPath, 'index.html')))
}
