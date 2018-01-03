import { handleActions } from 'redux-actions'

const initialState = {
  response: null,
  fail: null
}

export default handleActions({
  GET_GRAPHQL_RESPONSE: {
    next (state, action) {
      return {
        response: JSON.stringify(action)
      }
    },
    throw (state, action) {
      return {
        fail: JSON.stringify(action)
      }
    }
  }
}, initialState)
