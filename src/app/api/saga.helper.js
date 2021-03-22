import { put } from 'redux-saga/effects'

export const genericResponseSuccess = {
  data: {
    success: true,
    message: null,
    data: {}
  }
}

export const genericResponseFailure = {
  data: {
    success: false,
    message: 'api error',
    data: {}
  }
}

export const genericJsError = "Cannot read property 'success' of undefined"

export const genericServerError = 'Null reference exception on backend data'

export const genericCancelMessage = 'Cancelled previous calls to'

export const errorAction = (type, payload) => ({
  type: `${type}_ERROR`,
  payload
})

export const cancelAction = (type, payload) => ({
  type: `${type}_CANCEL`,
  payload
})

export const successAction = (type, payload) => ({
  type: `${type}_SUCCESS`,
  payload
})

export function* handleSuccess(type, response) {
  yield put(successAction(type, response))
}

export function* handleError(type, error) {
  yield put(errorAction(type, error))
}

export function* handleCancel(type, response) {
  yield put(cancelAction(type, response))
}

export const isCallCancelled = (message) =>
  typeof message === 'string' && message.includes(genericCancelMessage)
