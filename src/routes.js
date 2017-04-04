import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './client/components/home-page'
import LoginPage from './client/components/login-page'
import TopNav from './client/components/top-nav'

export default () => (
  <div className='app-wrapper'>
    <TopNav />

    <Switch>
      <Route path='/' component={HomePage} />
      <Route path='/login' component={LoginPage} />
    </Switch>
  </div>
)
