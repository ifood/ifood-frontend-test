import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from '../pages/Auth';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/auth" component={Auth} />
    <Route exact path="/home" component={Home} />
    <Route exact path="*" component={NotFound} />
  </Switch>
);

export default Routes;
