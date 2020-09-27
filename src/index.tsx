import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import theme from "./theme/theme";
import GlobalStyle from "./theme/globalStyles";
import { ThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import { AuthProvider } from "./providers";
import { FilterProvider } from "./providers/FiltersProvider";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import MomentUtils from '@date-io/moment';

ReactDOM.render(
  <ThemeProvider theme={ theme }>
    <SnackbarProvider>
      <GlobalStyle/>
      <AuthProvider>
        <MuiPickersUtilsProvider utils={ MomentUtils }>
          <FilterProvider>
            <App/>
          </FilterProvider>
        </MuiPickersUtilsProvider>
      </AuthProvider>
    </SnackbarProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
