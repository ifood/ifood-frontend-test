import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import Routes from './routes';

import theme from './theme';

import { AuthProvider } from './hooks/auth';

import './assets/styles/resets.css';

const App = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </ThemeProvider>
);

export default App;
