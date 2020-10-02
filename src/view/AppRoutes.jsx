import React from 'react';
import { Switch, Redirect, useLocation } from 'react-router-dom';
import Playlist from './playlists/PlaylistView';
import AuthRoute from './AuthRoute';
import Login from './login/Login';

const HOME_ROUTE = '/playlists';

export default function AppRoutes() {
  const location = useLocation();
  return (
    <Switch>
      <AuthRoute path={HOME_ROUTE}>
        <Playlist />
      </AuthRoute>
      <AuthRoute path="/" fallbackRoute={<Login />}>
        <Redirect to={{ pathname: HOME_ROUTE, hash: location.hash }} />
      </AuthRoute>
    </Switch>
  );
}
