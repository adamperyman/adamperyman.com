import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import TestReducer from '../components/test/reducer'

export default combineReducers({
  routing: routerReducer,
  test: TestReducer
})
