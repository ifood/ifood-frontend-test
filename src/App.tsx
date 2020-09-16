import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import Routes from './routes';

import theme from './theme';

import './assets/styles/resets.css';

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

export default App;
