import React from 'react'
import ReactDOM from 'react-dom'

import { Route, BrowserRouter } from 'react-router-dom'

import IndexPage from './components/index-page'

const AppWithRouter  = () => (
  <BrowserRouter>
    <Route path='/' component={IndexPage} />
  </BrowserRouter>
)

window.onload = () => {
  ReactDOM.render(<AppWithRouter />, document.getElementById('main'))
}
