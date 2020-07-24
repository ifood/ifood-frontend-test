import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Playlists from '../pages/Playlists';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Playlists} />
    </Switch>
  </Router>
);

export default Routes;
