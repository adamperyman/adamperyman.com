import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import HomePage from 'components/home-page'
import LoginPage from 'components/login-page'
import PageNotFound from 'components/page-not-found'
import TopNav from 'components/top-nav'

const AppWrapper = () => (
  <div className='app-wrapper'>
    <TopNav />

    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/login' component={LoginPage} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
)

const AppWithRouter  = () => (
  <BrowserRouter>
    <AppWrapper />   
  </BrowserRouter>
)

export default AppWithRouter
