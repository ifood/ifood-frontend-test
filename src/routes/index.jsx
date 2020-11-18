import React from "react";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import HeaderComponent from "../components/global/header"
import LoginComponent from "../components/login"
import MainComponent from "../components/main"
// import FooterComponent from "../components/global/footer"

export default function Navigation() {
  return (
    <Router>
      <Route>
        <CssBaseline />
        <HeaderComponent />
        <Switch>
          <Route path='/login' component={LoginComponent} />
          <Route path='/main' component={MainComponent} />
          <Redirect from="/" to="/login" />
        </Switch>
        {/* <FooterComponent /> */}
      </Route>
    </Router>
  );
}
