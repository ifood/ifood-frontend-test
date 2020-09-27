import React from 'react';
import { FaSpotify } from 'react-icons/fa';

import LayoutTemplate from '../../templates/LayoutTemplate';
import Button from '../../components/Button';

import { getSpotifyURL } from '../../services/spotify';

const Login = () => {
  const handleLogin = () => {
    const url = getSpotifyURL();
    window.location.href = url;
  };

  return (
    <LayoutTemplate>
      <Button
        value="Login with Spotify"
        onClick={handleLogin}
        startEnhancer={() => (
          <span>
            <FaSpotify style={{ fontSize: '1.5rem' }} />
          </span>
        )}
      />
    </LayoutTemplate>
  );
};

export default Login;
