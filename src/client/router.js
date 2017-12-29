import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './app'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' name='home' component={App} />
    </Switch>
  </BrowserRouter>
)
