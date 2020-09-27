import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" component={Auth} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
