import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import { SnackbarProvider } from 'notistack';

import Routes from './routes';

import theme from './theme';

import { AuthProvider } from './hooks/auth';

import './assets/styles/resets.css';

const App = () => (
  <ThemeProvider theme={theme}>
    <SnackbarProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </SnackbarProvider>
  </ThemeProvider>
);

export default App;
