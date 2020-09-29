import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAccessToken, setAccessToken, removeAccessToken } from './utils/acessToken';
import Login from './pages/Login';
import Playlists from './pages/Playlist';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EB1E2C',
    },
    secondary: {
      main: '#EB1E2C',
    }
  }
})

class App extends Component {
  state = {
    hasAccessToken: false,
  };

  componentDidMount() {
    this.handleAccessToken();
  }

  handleLogout = () => {
    removeAccessToken();
    this.setState({ hasAccessToken: false });
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
          {hasAccessToken && <Playlists handleLogout={this.handleLogout} />}
          {!hasAccessToken && <Login />}
        </ThemeProvider>
        <ToastContainer position="bottom-right" />
      </div>
    );
  }
}

export default App
