import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";

const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route
        key="home"
        path="/"
        exact
        component={ HomePage }
      />

      <Redirect
        from="*"
        to="/"
      />
    </Switch>
  </BrowserRouter>
);

export default Routes
