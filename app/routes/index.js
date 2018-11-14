import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AuthWrapper from './Auth';
import ShowPlalists from './ShowPlaylists';

const Routes = (store) => (
  <Switch>
    <Route path="/" render={() => <LandingPage />} exact />
    <Route path="/callback" render={() => AuthWrapper(store)} exact />
    <Route path="/showplaylists" render={() => ShowPlalists(store)} exact />
  </Switch>
);

export default Routes;

