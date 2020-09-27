import React from 'react';
import { FaSpotify } from 'react-icons/fa';
import { useIntl } from 'react-intl';

import LayoutTemplate from '../../templates/LayoutTemplate';
import Button from '../../components/Button';
import messages from './messages';

import { getSpotifyURL } from '../../services/spotify';

const Login = () => {
  const intl = useIntl();

  const handleLogin = () => {
    const url = getSpotifyURL();
    window.location.href = url;
  };

  return (
    <LayoutTemplate>
      <Button
        value={intl.formatMessage(messages.loginButton)}
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
