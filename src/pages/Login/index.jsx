/* eslint-disable react/sort-comp */
/* eslint-disable no-var */
/* eslint-disable no-cond-assign */
import { Component } from 'react';

import { Switch, Redirect } from 'react-router-dom';

import logo from '../../assets/logo.png';

import getHashParams from '../../utils/getHashParams';

import { Form, Title, LoginButton } from './styles';

class Login extends Component {
  state = {
    loading: false,
  };

  handleSignIn = e => {
    e.preventDefault();
    window.open(
      `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&scope=user-read-private%20user-read-email&state=34fFs29kd09`,
      '_self',
    );
  };

  handleLogin = (token, type, expires_in) => {
    this.setState({
      loading: true,
    });

    localStorage.setItem('@SpotiFood:token', token);
    localStorage.setItem('@SpotiFood:type', type);
    localStorage.setItem('@SpotiFood:expires_in', expires_in);

    window.history.pushState({ urlPath: '/auth' }, '', '/auth');

    this.setState({
      loading: false,
    });

    window.location.reload();
    return (
      <Switch>
        <Redirect path="/auth" to="/home" />
      </Switch>
    );
  };

  componentDidMount() {
    const { access_token, token_type, expires_in } = getHashParams();

    if (access_token !== undefined) {
      this.handleLogin(access_token, token_type, expires_in);
    }
  }

  render() {
    const { loading } = this.state;

    return (
      <Form>
        <div className="text-center mb-4">
          <img className="mb-4" src={logo} alt="" width="72" height="72" />
          <Title>SpotiFood</Title>
        </div>
        <div className="row justify-content-center">
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <LoginButton onClick={this.handleSignIn}>
              Log In with Spotify
            </LoginButton>
          )}
        </div>
      </Form>
    );
  }
}

export default Login;
