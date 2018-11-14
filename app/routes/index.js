import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShowPlaylists from './ShowPlaylists';

const Routes = (store) => (
  <Switch>
    <Route path="/" render={() => ShowPlaylists(store)} exact />
  </Switch>
);

export default Routes;

