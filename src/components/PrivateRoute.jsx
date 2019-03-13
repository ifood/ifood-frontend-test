import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ isAuthenticated, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/signin" />
      ))
      }
    />
  );
}

// TODO: prop types

export default PrivateRoute;
