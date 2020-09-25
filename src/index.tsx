import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "./Hooks/themes";
// import App from "./App";
import Login from "./Pages/Login";
import GlobalStyles from "./Styles/GlobalStyles";


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
    <GlobalStyles />
      <Login />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
