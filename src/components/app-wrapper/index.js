import React from 'react'
import { Route } from 'react-router-dom'

import TopNav from '../top-nav'
import IndexPage from '../index-page'
import TestPage from '../test-page'

const AppWrapper = () => (
  <div className='app-wrapper'>
    <TopNav />

    <Route exact path='/' component={IndexPage} />
    <Route path='/test-page' component={TestPage} />
  </div>
)

export default AppWrapper
