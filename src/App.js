import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Theme from './styles/theme';

import Router from './pages/router';

function App() {
  return (
    <ThemeProvider theme={ Theme }>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
