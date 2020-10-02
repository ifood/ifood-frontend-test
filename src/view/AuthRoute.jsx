import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { useAuthContext } from '../auth/AuthContext';

function AuthRoute({
  children,
  fallbackRoute = <Redirect to={{ pathname: '/' }} />,
  ...rest
}) {
  const auth = useAuthContext();

  return (
    <Route
      {...rest}
      render={() => {
        if (auth == null) {
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

export default AuthRoute;
