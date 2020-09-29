import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../pages/Login";
import Playlists from "../pages/Playlists";

const Routes = () => (
  <Router>
    <Route exact path="/" component={Login} />
    <Route exact path="/playlists" component={Playlists} />
  </Router>
);

export default Routes;
