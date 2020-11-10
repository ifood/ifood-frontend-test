import React from "react";
import { Route, Redirect } from "react-router-dom";
import { hasValidAccessToken } from "utils/auth";

export default function PrivateRoute({ component: C, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        hasValidAccessToken() ? <C {...props} /> : <Redirect to={"/intro"} />
      }
    />
  );
}
