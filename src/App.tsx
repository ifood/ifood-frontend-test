import React from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./Hooks/themes";
import Routes from "./Routes";
import GlobalStyles from "./Styles/GlobalStyles";

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
