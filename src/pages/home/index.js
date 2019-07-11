import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import { withTokenValidation } from 'hocs/withTokenValidation';
import { Wrapper } from './styles';

const authorizationUrl = `https://accounts.spotify.com/authorize?
client_id=${process.env.REACT_APP_CLIENT_ID}
&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=token&state=pg`;

class Home extends Component {
  state = {};

  componentDidMount = () => {
    if (window.location.hash || window.location.search.indexOf('error') > 0) {
      this.handleAuthorization();
    }
  };

  openAuthorizationPage = () => {
    window.open(authorizationUrl, '_self');
  };

  parseWindowHash = () => {
    return window.location.hash
      .substring(1)
      .split('&')
      .reduce((initial, item) => {
        const result = initial;
        if (item) {
          const parts = item.split('=');
          result[parts[0]] = decodeURIComponent(parts[1]);
        }
        return result;
      }, {});
  };

  handleAuthorization = () => {
    const parsedHash = this.parseWindowHash();
    if (parsedHash.access_token && parsedHash.state === 'pg') {
      const validity = new Date(new Date().getTime() + (parsedHash.expires_in * 1000)).getTime();

      const tokenToStorage = {
        token: parsedHash.access_token,
        validity,
      };

      window.localStorage.setItem('spotifyToken', JSON.stringify(tokenToStorage));
      window.location.hash = '';
      this.redirectToPlaylistPage();
      return;
    }

    this.props.enqueueSnackbar('You must authorize the application to obtain access', { variant: 'warning' });
  };

  redirectToPlaylistPage = () => {
    const { history } = this.props;
    history.push({ pathname: '/playlists' });
  };

  render() {
    return (
      <Wrapper>
        <Paper className="login-box">
          <Typography variant="h4" component="h3">
            Bem vindo ao Spotifood!
          </Typography>
          <Typography component="p">
            Para continuar, autorize nosso app em seu Spotify.
          </Typography>

          <Button onClick={this.openAuthorizationPage} variant="contained" color="primary">
            Autorizar
          </Button>
        </Paper>
      </Wrapper>
    );
  }
}

Home.propTypes = {
  history: PropTypes.object.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
};

export default withTokenValidation(withRouter(Home));
