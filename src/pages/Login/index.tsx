import React from 'react';
import Button from '../../components/Button';
import SportifyService from '../../services/api/spotify';
import { LoginPage } from './styles';

const Login = () => {
  // const auth = useContext(AuthContext);
  const handleLogin = () => {
    const url = SportifyService.getURL();
    window.location.href = url;
  };
  return (
    <LoginPage>
      <h1>Login Works</h1>
      <Button type="button" onClick={handleLogin}>
        Login
      </Button>
    </LoginPage>
  );
};

export default Login;
