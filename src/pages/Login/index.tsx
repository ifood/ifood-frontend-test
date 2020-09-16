import React from 'react';

import Logo from '../../components/Logo';

import { Container, MusicalPhrase, LoginToContinue } from './styles';

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
  </Container>
);

export default Login;
