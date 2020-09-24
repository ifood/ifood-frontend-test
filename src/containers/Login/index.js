import React from 'react';

import Button from '../../components/Button';

import { getSpotifyURL } from '../../services/spotify';

const Login = () => {
  const handleLogin = () => {
    const url = getSpotifyURL();
    window.open(url, '_self');
  };

  return (
    <>
      <Button value="Login with Spotify" onClick={handleLogin} />
    </>
  );
};

export default Login;
