import React, { Component } from "react";
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import PrivateRoute from "components/PrivateRoute";
import PublicOnlyRoute from "components/PublicOnlyRoute";
import Landing from "containers/Landing";
import Playlists from "containers/Playlists";
import CallbackHandler from "containers/CallbackHandler";

export const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="app">
          <Switch>
            <PublicOnlyRoute path="/callback" component={CallbackHandler} />
            <PublicOnlyRoute path="/intro" component={Landing} />
            <PrivateRoute path="/" component={Playlists} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
