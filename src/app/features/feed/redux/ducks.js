import update from 'immutability-helper'

// Actions
const duckRoot = 'Feed/'

export const GET_TWEETS = `${duckRoot}GET_TWEETS`
export const GET_TWEETS_SUCCESS = `${GET_TWEETS}_SUCCESS`
export const GET_TWEETS_ERROR = `${GET_TWEETS}_ERROR`

export const initialState = {
  searchLoading: false,
  searchMetadata: {},
  tweets: []
}

// Reducer
export default function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_TWEETS:
      return update(state, {
        searchLoading: { $set: true }
      })

    case GET_TWEETS_SUCCESS: {
      const { statuses, search_metadata } = payload
      return update(state, {
        searchLoading: { $set: false },
        searchMetadata: { $set: search_metadata },
        tweets: { $set: statuses }
      })
    }

    case GET_TWEETS_ERROR:
      return update(state, {
        searchLoading: { $set: false },
        tweets: { $set: [] }
      })

    default:
      return state
  }
}

// Action Creators
// export const getTweets = ({ search, hashtag }) => ({
//   type: GET_TWEETS,
//   payload: { search, hashtag }
// })
