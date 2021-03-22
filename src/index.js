import '@babel/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import WebFont from 'webfontloader'

import { store, history } from 'AppConfigs'

import { App } from './app'
import './styles/index.scss'

WebFont.load({
  google: {
    families: ['Inter:400,500,700']
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('App')
)
