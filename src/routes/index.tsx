import React from 'react'; //eslint-disable-line
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from 'pages/home';
import { NotFound } from 'pages/not-found';
import { Error } from 'pages/error';
import { Playlist } from 'pages/playlist';
import AuthRoute from './auth';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <AuthRoute component={Playlist} path="/playlist" />
      <Route path="/error" component={Error} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
