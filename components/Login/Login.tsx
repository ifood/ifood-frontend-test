import React, { useCallback } from 'react';

import { LoginContainer } from './styles';

const LoginForm: React.FC = () => {
  const handleLogin = useCallback(() => {
    document.location.href = `https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=token&redirect_uri=${process.env.REDIRECT_URI}`;
  }, []);

  return (
    <LoginContainer>
      <h1>Spotifood</h1>
      <button type="button" onClick={handleLogin}>
        Fazer login com o Spotify
      </button>
    </LoginContainer>
  );
};

export default LoginForm;
