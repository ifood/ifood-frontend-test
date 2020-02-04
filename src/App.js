import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getAccessToken, setAccessToken } from './utils/accessToken';
import Login from './pages/Login';
import Playlists from './pages/Playlists';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EA1D2C',
    },
    secondary: {
      main: '#1ED760',
    },
  },
});

class App extends Component {
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
          {hasAccessToken && <Playlists />}
          {!hasAccessToken && <Login />}
        </ThemeProvider>
        <ToastContainer position="bottom-right" />
      </div>
    );
  }
}

export default App;
