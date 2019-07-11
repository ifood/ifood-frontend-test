import React, { Fragment } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import { Provider as ReduxProvider } from 'react-redux';

import { GlobalStyle } from 'assets/styles/global';
import Routes from 'routes';
import store from 'store';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#de1233' },
    secondary: { main: '#87da65' },
  },
  overrides: {
    MuiButton: {
      label: {
        fontWeight: 'bold',
      },
    },
    MuiTablePagination: {
      root: {
        border: 'none',
      },
    },
  },
});

const App = () => {
  return (
    <ReduxProvider store={store}>
      <MuiThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={1}>
          <Fragment>
            <Routes />
            <GlobalStyle />
          </Fragment>
        </SnackbarProvider>
      </MuiThemeProvider>
    </ReduxProvider>
  );
};

export default App;
