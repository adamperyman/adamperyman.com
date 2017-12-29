import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Home from './components/home'
import Test from './components/test'

export default () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/test' name='test' component={Test} />
      <Redirect to='/' />
    </Switch>
  </div>
)
