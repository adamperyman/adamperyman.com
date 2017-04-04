import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import AppWithRouter from './router'

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
  module.hot.accept('./router', () => {
    const NextApp = require('./router').default
    render(NextApp)
  })
}

