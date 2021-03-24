import update from 'immutability-helper'

// Actions
const duckRoot = 'Feed/'

export const GET_TWEETS = `${duckRoot}GET_TWEETS`
export const GET_TWEETS_SUCCESS = `${GET_TWEETS}_SUCCESS`
export const GET_TWEETS_ERROR = `${GET_TWEETS}_ERROR`

export const GET_NEXT_TWEETS = `${duckRoot}GET_NEXT_TWEETS`
export const GET_NEXT_TWEETS_SUCCESS = `${GET_NEXT_TWEETS}_SUCCESS`
export const GET_NEXT_TWEETS_ERROR = `${GET_NEXT_TWEETS}_ERROR`

export const initialState = {
  search: '',
  searchLoading: false,
  nextLoading: false,
  searchMetadata: {},
  tweets: [],
  hashtag: '',
  hashtags: []
}

// Reducer
export default function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_TWEETS: {
      const { search, hashtag } = payload
      return update(state, {
        search: { $set: search },
        hashtag: { $set: hashtag || '' },
        searchLoading: { $set: true }
      })
    }

    case GET_TWEETS_SUCCESS: {
      const { statuses, search_metadata } = payload
      const hashtags = statuses.flatMap((tweet) =>
        tweet?.entities?.hashtags.map(({ text }) => text)
      )
      return update(state, {
        searchLoading: { $set: false },
        searchMetadata: { $set: search_metadata },
        tweets: { $set: statuses },
        hashtags: { $set: hashtags }
      })
    }

    case GET_TWEETS_ERROR:
      return update(state, {
        searchLoading: { $set: false }
      })

    case GET_NEXT_TWEETS: {
      return update(state, {
        nextLoading: { $set: true }
      })
    }

    case GET_NEXT_TWEETS_SUCCESS: {
      const { statuses, search_metadata } = payload

      // combine existing with new:
      const { tweets } = state
      const newTweets = tweets.concat(statuses)

      const hashtags = newTweets.flatMap((tweet) =>
        tweet?.entities?.hashtags.map(({ text }) => text)
      )
      return update(state, {
        nextLoading: { $set: false },
        searchMetadata: { $set: search_metadata },
        tweets: { $set: newTweets },
        hashtags: { $set: hashtags }
      })
    }

    case GET_NEXT_TWEETS_ERROR:
      return update(state, {
        nextLoading: { $set: false }
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
