import React from "react";
import { Route, Redirect } from "react-router-dom";
import { hasValidAccessToken } from "utils/auth";
// import PropTypes from 'prop-types'

export default function PublicOnlyRoute({ component: C, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        !hasValidAccessToken() ? <C {...props} /> : <Redirect to="/playlists" />
      }
    />
  );
}
