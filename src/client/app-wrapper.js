import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './components/home-page'
import LoginPage from './components/login-page'
import TopNav from './components/top-nav'

export default () => (
  <div className='app-wrapper'>
    <TopNav />
    <Switch>
      <Route path='/' component={HomePage} />
      <Route path='/login' component={LoginPage} />
    </Switch>
  </div>
)
