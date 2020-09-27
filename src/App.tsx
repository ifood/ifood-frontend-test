import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styles/GlobalStyles";

import AppProvider from "./Hooks";
import { useTheme } from "./Hooks/themes";

import PlaylistsHome from "./Pages/PlaylistsHome";
import LayoutPage from "./Components/LayoutPage";

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LayoutPage>
        <BrowserRouter>
          <AppProvider>
            <Route path="/" exact component={PlaylistsHome} />
          </AppProvider>
        </BrowserRouter>
      </LayoutPage>
    </ThemeProvider>
  );
};

export default App;
