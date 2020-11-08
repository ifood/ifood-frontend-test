import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "containers/Landing/index.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" component={Landing} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
