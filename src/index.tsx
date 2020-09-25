import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "./Hooks/themes";
import App from "./App";
import Login from "./Pages/Login";


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Login />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
