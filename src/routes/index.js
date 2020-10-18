import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Login from '../pages/Login';
import Playlist from '../pages/Playlist';

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Playlist} />
  </Switch>
);

export default Routes;
