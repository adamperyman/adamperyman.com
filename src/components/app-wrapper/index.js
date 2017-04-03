import React from 'react'
import { Route, Switch } from 'react-router-dom'

import IndexPage from 'components/index-page'
import PageNotFound from 'components/page-not-found'
import TopNav from 'components/top-nav'
import Login from 'components/login'

const AppWrapper = () => (
  <div className='app-wrapper'>
    <TopNav />

    <Switch>
      <Route exact path='/' component={IndexPage} />
      <Route path='/login' component={Login} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
)

export default AppWrapper
