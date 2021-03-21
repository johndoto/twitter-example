import '@babel/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'

import { App } from './app'
import './styles/index.scss'

WebFont.load({
  google: {
    families: ['Inter:400,500,700']
  }
})

ReactDOM.render(<App />, document.getElementById('App'))
