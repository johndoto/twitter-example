import { takeEvery } from 'redux-saga/effects'
import { search as searchApi, handleSuccess, handleError } from 'Api'

// import * as DUCK from './ducks'
import { GET_TWEETS } from './ducks'

// workers
export function* getTweetsSaga({ payload: { searchText } }) {
  try {
    const response = yield searchApi.getTweets(searchText)
    const { success, data } = response.data
    if (success) {
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

// watchers
export const watchers = [
  function* watchGetTweetsSaga() {
    yield takeEvery(GET_TWEETS, getTweetsSaga)
  }
]
