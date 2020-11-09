import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "components/PrivateRoute";
import PublicOnlyRoute from "components/PublicOnlyRoute";
import Landing from "containers/Landing";
import Playlists from "containers/Playlists";
import CallbackHandler from "containers/CallbackHandler";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/callback" component={CallbackHandler} />
            <PublicOnlyRoute path="/intro" component={Landing} />
            <PrivateRoute path="/" component={Playlists} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
