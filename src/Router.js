import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Auth from './pages/Auth';
import Error from './pages/Error';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" component={Auth} />
      <Route path="*" component={Error} />
    </Switch>
  </BrowserRouter>
);

export default Router;
