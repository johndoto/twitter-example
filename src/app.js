import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home } from 'Features'
// import { Navigation } from 'Patterns'

export const App = () => (
  <Fragment>
    {/* <Navigation /> */}
    <Switch>
      <Route exact path="/" component={Home} />
      {/*
        <Route path="/about" component={About} />
      */}
    </Switch>
  </Fragment>
)
