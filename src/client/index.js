import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

import AppWrapper from 'components/app-wrapper'

const AppWithRouter  = () => (
  <BrowserRouter>
    <AppWrapper />   
  </BrowserRouter>
)

window.onload = () => {
  ReactDOM.render(<AppWithRouter />, document.getElementById('main'))
}
