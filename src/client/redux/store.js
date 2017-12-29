import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import reduxActionsLogger from '../logger'

const initialState = {}

const middleware = [ thunk ]

if (module.hot) {
  middleware.push(reduxActionsLogger)
}

export default createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
)
