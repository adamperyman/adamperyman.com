import { Map } from 'immutable'

import { TEST } from './actions'

const initialState = Map({
  foo: null
})

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return state.set('foo', 'bar')

    default:
      return state
  }
}
