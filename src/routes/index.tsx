import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from 'pages/home';
import { Error } from 'pages/error';
import { Playlist } from 'pages/playlist';
import AuthRoute from './auth';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <AuthRoute component={Playlist} path="/playlist" />
      <Route component={Error} />
    </Switch>
  </Router>
);

export default Routes;
