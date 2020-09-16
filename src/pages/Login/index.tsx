import React from 'react';

import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import Logo from '../../components/Logo';

import { Container, MusicalPhrase, LoginToContinue } from './styles';

const SpotifyButton = withStyles(() => ({
  root: {
    width: '240px',
    height: '48px',
    borderRadius: '24px',
    color: '#ffffff',
    fontSize: '16px',
    backgroundColor: '#168d40',
    '&:hover': {
      backgroundColor: '#1ed760',
    },
  },
}))(Button);

const Login = () => (
  <Container>
    <Logo width="180px" />
    <MusicalPhrase>
      Stop! Wait a minute
      <span role="img" aria-label="Notas músicais"> 🎶.</span>
    </MusicalPhrase>
    <LoginToContinue>
      Primeiro, você precisa fazer o login com sua conta do spotify.
    </LoginToContinue>
    <SpotifyButton>Login</SpotifyButton>
  </Container>
);

export default Login;
