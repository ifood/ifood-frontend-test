import React from "react";
import { ThemeProvider } from "styled-components";

import { AuthProvider } from "./Hooks/auth";
import { useTheme } from "./Hooks/themes";

import Routes from "./Routes";
import GlobalStyles from "./Styles/GlobalStyles";

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
