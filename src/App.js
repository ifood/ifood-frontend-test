import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "routes";

import GlobalStyle from "./style/GlobalStyle";

const App = () => (
  <Router>
    <GlobalStyle />
    <Routes />
  </Router>
);

export default App;
