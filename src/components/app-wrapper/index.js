import React from 'react'
import { Route, Switch } from 'react-router-dom'

import IndexPage from '../index-page'
import PageNotFound from '../page-not-found'
import TestPage from '../test-page'
import TopNav from '../top-nav'

const AppWrapper = () => (
  <div className='app-wrapper'>
    <TopNav />

    <Switch>
      <Route exact path='/' component={IndexPage} />
      <Route path='/test-page' component={TestPage} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
)

export default AppWrapper
