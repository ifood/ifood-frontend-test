import React, { Component } from 'react';
import './App.css';
import Login from './pages/Login';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { setAccessToken, getAccessToken } from './utils/accessToken';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#1ED760'
    }
  }
});

export default class App extends Component {
  state = {
    hasToken: false
  };

  componentDidMount() {
    this.handleAccessToken();
  }

  handleAccessToken() {
    const accessToken = getAccessToken();

    if (!accessToken) {
      return setAccessToken();
    }

    return this.setState({ hasToken: true });
  }

  render() {
    const { hasToken } = this.state;
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          {hasToken && <h1>Welcome</h1>}
          {!hasToken && <Login />}
        </ThemeProvider>
      </div>
    );
  }
}
