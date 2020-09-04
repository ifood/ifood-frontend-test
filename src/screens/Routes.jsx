import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import FeaturedPlaylists from './FeaturedPlaylists';
import Login from './Login';
import { useAuthorization } from '../hooks';

const HOME_ROUTE = '/featured-playlists';

export default function Routes() {
  const location = useLocation();
  return (
    <Switch>
      <AuthRoute path={HOME_ROUTE}>
        <FeaturedPlaylists />
      </AuthRoute>
      <AuthRoute path="/" fallbackRoute={<Login />}>
        <Redirect
          to={{
            pathname: HOME_ROUTE,
            hash: location.hash,
          }}
        />
      </AuthRoute>
    </Switch>
  );
}

function AuthRoute({
  children,
  fallbackRoute = (
    <Redirect
      to={{
        pathname: '/',
      }}
    />
  ),
  ...rest
}) {
  const authorization = useAuthorization();

  return (
    <Route
      {...rest}
      render={() => {
        if (authorization == null) {
          return fallbackRoute;
        }
        return children;
      }}
    />
  );
}

AuthRoute.propTypes = {
  children: PropTypes.node,
  fallbackRoute: PropTypes.node,
};
