import React, { FunctionComponent, useLayoutEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import useAuthentication from "../hooks/useAuthentication";
import PlayListsPage from "../pages/Playlists";

type RouteProps = {
  component: FunctionComponent
  key: string;
  path: string;
  exact: boolean;
  isAuthenticated: () => boolean;
}

const PrivateRoute: React.FC<RouteProps> = ({ component, isAuthenticated, ...rest }) => {

  const renderComponent = () => {
    return (
      isAuthenticated()
        ? <Route { ...rest } component={ component }/>
        : <Redirect
          to="/"
        />
    )
  }

  return renderComponent();
}

const Routes = (): JSX.Element => {
  const { isAuthenticated } = useAuthentication();

  return (
    <BrowserRouter>
      <Switch>
        <Route
          key="sign-in"
          path="/"
          exact
          component={ LoginPage }
        />

        <PrivateRoute
          key="playlists"
          path="/playlists"
          exact
          component={ PlayListsPage }
          isAuthenticated={ isAuthenticated }
        />

        <Redirect
          from="*"
          to="/playlists"
        />
      </Switch>
    </BrowserRouter>
  )

};

export default Routes
