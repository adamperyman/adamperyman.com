import { createAction } from 'redux-actions'

import HappyFetch from 'happy-fetch'

const query = `{
users {
  _id
  name
}
}`

export const getGraphQlResponse = createAction('GET_GRAPHQL_RESPONSE',
  async () => {
    try {
      const happyFetch = new HappyFetch('http://localhost:4001')

      const result = await happyFetch.query(query)

      return {
        response: result
      }
    } catch (error) {
      console.log('error: ', error) // eslint-disable-line no-console
    }
  }
)
