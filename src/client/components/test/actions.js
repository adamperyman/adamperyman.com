import HappyFetch from 'happy-fetch'

import logger from '../../logger'

const query = `
{
  users {
    _id
    name
  }
}`

export const getGraphQlResponse = () => async dispatch => {
  try {
    const happyFetch = new HappyFetch('http://localhost:3001')

    const result = await happyFetch.query(query)

    dispatch({
      type: 'GET_GRAPHQL_RESPONSE',
      payload: {
        response: result
      }
    })
  } catch (error) {
    logger.error('Failed to get API response: ' + error)
  }
}
