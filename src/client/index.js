import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import AppWithRouter from './routes'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('main')
  )
}

render(AppWithRouter)

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextApp = require('./routes').default
    render(NextApp)
  })
}

