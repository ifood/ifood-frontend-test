import React from 'react';
import { BrowserRouter as Router, Route, Redirect, RouteComponentProps } from "react-router-dom"
import { Login } from './pages/Login/Login';
import { Playlists } from './pages/Playlists/Playlists';
import { Playlist } from './pages/Playlist/Playlist';
import { SpotifyService } from './services/spotify';

const PrivateRoute = ({ Component, path }: { Component: React.FC<RouteComponentProps>, path: string }) => (
  <Route path={path} render={props => (
    SpotifyService.hasAccessToken() ? <Component {...props} /> : <Redirect to="/" />
  )} />
);

const App: React.FC = () => (
  <Router>
    <Route path="/" exact component={Login} />
    <PrivateRoute path="/playlists" Component={Playlists} />
    <PrivateRoute path="/playlist" Component={Playlist} />
  </Router>
);

export default App;
