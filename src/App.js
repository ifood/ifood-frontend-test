import React, { Component } from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Login from './pages/Login';
import { getAccessToken, setAccessToken } from './utils/accessToken';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#1ED760',
    },
  },
});

export default class App extends Component {
  state = {
    hasAccessToken: false,
  };

  componentDidMount() {
    this.handleAccessToken();
  }

  handleAccessToken() {
    const accessToken = getAccessToken();

    if (accessToken) {
      setAccessToken(accessToken);
      this.setState({ hasAccessToken: true });
    }
  }

  render() {
    const { hasAccessToken } = this.state;
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          {hasAccessToken && <h1>Welcome</h1>}
          {!hasAccessToken && <Login />}
        </ThemeProvider>
      </div>
    );
  }
}
