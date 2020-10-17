import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Pages
import Login from '../pages/Login';
import Playlist from '../pages/Playlist';

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Playlist} />
  </BrowserRouter>
);

export default Routes;
