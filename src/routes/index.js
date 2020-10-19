import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import Login from '../pages/Login';
import Playlist from '../pages/Playlist';

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/dashboard" component={Playlist} />
    <Route render={() => <Redirect to="/login" />} />
  </Switch>
);

export default Routes;
