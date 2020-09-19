import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import MomentUtils from '@date-io/moment';

import { SnackbarProvider } from 'notistack';

import 'moment/locale/pt-br';

import Routes from './routes';

import theme from './theme';

import { AuthProvider } from './hooks/auth';

import './assets/styles/resets.css';

const App = () => (
  <ThemeProvider theme={theme}>
    <SnackbarProvider>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </MuiPickersUtilsProvider>
    </SnackbarProvider>
  </ThemeProvider>
);

export default App;
