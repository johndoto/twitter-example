import update from 'immutability-helper'

// Actions
const duckRoot = 'Feed/'

export const GET_TWEETS = `${duckRoot}GET_TWEETS`
export const GET_TWEETS_SUCCESS = `${GET_TWEETS}_SUCCESS`
export const GET_TWEETS_ERROR = `${GET_TWEETS}_ERROR`

export const initialState = {
  meta: {
    queryLoading: false
  },
  lists: {
    tweets: []
  }
}

// Reducer
export default function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_TWEETS:
      return update(state, {
        meta: {
          queryLoading: { $set: true }
        }
      })

    case GET_TWEETS_SUCCESS: {
      const { tweets } = payload
      return update(state, {
        meta: {
          queryLoading: { $set: false }
        },
        lists: {
          tweets: { $set: tweets }
        }
      })
    }

    case GET_TWEETS_ERROR:
      return update(state, {
        meta: {
          queryLoading: { $set: false }
        },
        lists: {
          tweets: { $set: [] }
        }
      })

    default:
      return state
  }
}

// Action Creators
export const getTweets = (searchText) => ({
  type: GET_TWEETS,
  payload: { searchText }
})
