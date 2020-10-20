import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route render={() => <Redirect to="/login" />} />
  </Switch>
);

export default Routes;
