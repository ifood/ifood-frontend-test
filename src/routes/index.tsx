import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from 'pages/home';
import { Error } from 'pages/error';
import { Playlist } from 'containers/playlist';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/playlist" component={Playlist} />
      <Route component={Error} />
    </Switch>
  </Router>
);

export default Routes;
