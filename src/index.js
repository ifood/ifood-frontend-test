import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "store";

import * as serviceWorker from "./serviceWorker";

import Routes from "./routes";

import { GlobalStyle } from "./constants/styles/global";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
