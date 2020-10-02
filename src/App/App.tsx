import React from 'react';
import { BrowserRouter, Route, Redirect, RouteComponentProps } from 'react-router-dom';

import './App.scss';

import LandingPage from '../pages/LandingPage/LandingPage';
import { SpotifyServiceAuth } from '../services/auth.service';
import Playlists from '../pages/Playlists/Playlists';

const PrivateRoute = ({ Component, path }: { Component: React.FC<RouteComponentProps>, path: string }) => (
  <Route path={path} render={props => (
    SpotifyServiceAuth.hasToken() ? <Component {...props} /> : <Redirect to="/" />
  )} />
);

const App = () => {
  return (
    <div className="app-component">
      <BrowserRouter>
        <Route path="/" exact component={LandingPage} />
        <PrivateRoute path="/playlists" Component={Playlists} />
      </BrowserRouter>
    </div>
  );
}

export default App;
