import { Iterable } from 'immutable'
import { createLogger } from 'redux-logger'

export default createLogger({
  collapsed: true,
  logErrors: true,
  stateTransformer: state => {
    const newState = {}

    Object.keys(state).forEach(i => {
      if (Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS()
      } else {
        newState[i] = state[i]
      }
    })

    return newState
  }
})
