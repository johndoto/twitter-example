import { takeEvery, all } from 'redux-saga/effects'
import { search as searchApi, handleSuccess, handleError } from 'Api'

import { GET_TWEETS, GET_NEXT_TWEETS } from './ducks'

// workers
export function* getTweetsSaga({ payload: { search, hashtag, maxId, count } }) {
  try {
    const response = yield searchApi.getTweets({ search, hashtag, maxId, count })
    const { status, data } = response
    if (status >= 200 && status <= 299) {
      yield handleSuccess(GET_TWEETS, data)
    } else {
      yield handleError(GET_TWEETS, {
        ...response.data
      })
    }
  } catch ({ response: error, message }) {
    const errorGroup = { ...error, message }
    yield handleError(GET_TWEETS, errorGroup)
  }
}

export function* getNextTweetsSaga({ payload: { search, hashtag, maxId, count } }) {
  try {
    const response = yield searchApi.getTweets({ search, hashtag, maxId, count })
    const { status, data } = response
    if (status >= 200 && status <= 299) {
      yield handleSuccess(GET_NEXT_TWEETS, data)
    } else {
      yield handleError(GET_NEXT_TWEETS, {
        ...response.data
      })
    }
  } catch ({ response: error, message }) {
    const errorGroup = { ...error, message }
    yield handleError(GET_NEXT_TWEETS, errorGroup)
  }
}

// watchers
export const watchers = [
  function* watchGetTweetsSaga() {
    yield takeEvery(GET_TWEETS, getTweetsSaga)
  },
  function* watchGetNextTweetsSaga() {
    yield takeEvery(GET_NEXT_TWEETS, getNextTweetsSaga)
  }
]
