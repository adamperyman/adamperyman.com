import { Map } from 'immutable'

const initialState = Map({
  response: null
})

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GRAPHQL_RESPONSE':
      return state.set('response', action.payload.response)

    default:
      return state
  }
}
