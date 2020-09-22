import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from 'pages/home'

export const ROUTES = {
  home: '/',
}

const Routes = () => (
  <Router>
    <Switch>
      <Route path={ROUTES.home} component={Home} exact />
    </Switch>
  </Router>
)

export default Routes
