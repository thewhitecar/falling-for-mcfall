import React from 'react'
import { Switch, Route } from 'react-router-dom'

//Components

import SplashPage from './views/SplashPage/SplashPage'

export default (
  <Switch>
    <Route exact path="/" component={SplashPage} />
  </Switch>
)
