import React from 'react';
import { ReactQueryConfigProvider, ReactQueryConfig } from 'react-query';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import CssBaseline from '@material-ui/core/CssBaseline';
import LuxonUtils from '@date-io/luxon';
import { theme } from '../theme';

const queryConfig: ReactQueryConfig = {
  queries: {
    refetchInterval: 30 * 1000,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: false,
  },
};

export const AppProvider: React.FC = ({ children }) => {
  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <MuiThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={LuxonUtils} locale="pt-BR">
          <CssBaseline />
          {children}
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    </ReactQueryConfigProvider>
  );
};
