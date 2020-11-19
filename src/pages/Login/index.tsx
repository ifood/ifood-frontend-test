import React from 'react';
import Button from '../../components/Button';
import SportifyService from '../../services/api/spotify';
import { LoginPage } from './styles';

const Login = () => {
  const handleLogin = () => {
    const url = SportifyService.getURL();
    window.location.href = url;
  };
  return (
    <LoginPage>
      <Button type="button" onClick={handleLogin}>
        Login using Spotify API
      </Button>
    </LoginPage>
  );
};

export default Login;
