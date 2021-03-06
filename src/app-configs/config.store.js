import { createStore, applyMiddleware, compose } from 'redux'

import { rootReducer } from './config.reducers'
import { rootSaga, middlewareSaga } from './config.sagas'
import { middlewareLogger } from './config.logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const createStoreWithMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(middlewareSaga)
  }
  return applyMiddleware(middlewareSaga, middlewareLogger)
}

const middleware = composeEnhancers(createStoreWithMiddleware())

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, middleware)
  middlewareSaga.run(rootSaga)
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./config.reducers.js', () => {
      store.replaceReducer('./config.reducers.js')
    })
  }
  return store
}

export const store = configureStore()
