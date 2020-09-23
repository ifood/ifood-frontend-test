import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";

const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route
        key="login"
        path="/"
        exact
        component={ LoginPage }
      />

      <Redirect
        from="*"
        to="/"
      />
    </Switch>
  </BrowserRouter>
);

export default Routes
