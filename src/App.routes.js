import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import Route from 'services/AdminRoute'

import Home from 'pages/home'
import Login from 'pages/login'

export const ROUTES = {
  home: '/',
  login: '/login',
}

const Routes = () => (
  <Router>
    <Switch>
      <Route path={ROUTES.home} component={Home} exact isPrivate />
      <Route path={ROUTES.login} component={Login} exact />
    </Switch>
  </Router>
)

export default Routes
