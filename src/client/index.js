import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import { BrowserRouter } from 'react-router-dom'

import AppWrapper from 'components/app-wrapper'

const AppWithRouter = () => (
  <BrowserRouter>
    <AppWrapper />   
  </BrowserRouter>
)

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
  module.hot.accept('components/app-wrapper', () => render(AppWithRouter))
}
