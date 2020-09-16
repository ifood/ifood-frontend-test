import React from 'react';

import Logo from '../../components/Logo';
import SpotifyButton from '../../components/SpotifyButton';

import config from '../../config';

import { Container, MusicalPhrase, LoginToContinue } from './styles';

const Login = () => {
  const { clientId } = config;

  const handleButtonClick = () => {
    const { origin, pathname } = window.location;

    const redirectUri = `${origin}${pathname}`;
    const queryString = `client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}`;

    window.location.href = `https://accounts.spotify.com/authorize?${queryString}`;
  };

  return (
    <Container>
      <Logo width="180px" />
      <MusicalPhrase>
        Stop! Wait a minute
        <span role="img" aria-label="Notas músicais"> 🎶.</span>
      </MusicalPhrase>
      <LoginToContinue>
        Primeiro, você precisa fazer o login com sua conta do Spotify.
      </LoginToContinue>
      <SpotifyButton onClick={handleButtonClick}>Login</SpotifyButton>
    </Container>
  );
};

export default Login;
