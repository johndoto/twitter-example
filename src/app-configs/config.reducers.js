import { combineReducers } from 'redux'

import { reducer as feed } from 'Features/feed'

export const rootReducer = combineReducers({
  feed
})
