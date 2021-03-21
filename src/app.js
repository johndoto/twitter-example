import React, { Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Home from './features/home/index'
// import { Navigation } from './patterns'

export const App = () => (
  <Fragment>
    <Router history={createBrowserHistory()}>
      {/*
        <Navigation />
      */}
      <Switch>
        <Route exact path="/" component={Home} />
        {/*
          <Route path="/about" component={About} />
        */}
      </Switch>
    </Router>
  </Fragment>
)
