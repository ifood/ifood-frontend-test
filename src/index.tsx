import React from "react";
import ReactDOM from "react-dom";

import { AuthProvider } from "./Hooks/auth";
import { ThemeProvider } from "./Hooks/themes";
// import App from "./App";
import Login from "./Pages/Login";
import GlobalStyles from "./Styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <GlobalStyles />
        <Login />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
