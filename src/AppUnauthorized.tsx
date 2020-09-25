import React from 'react';
import Container from '@material-ui/core/Container';
import { Login } from './components/Login/Login';

export const AppUnauthorized: React.FC = () => {
  return (
    <Container maxWidth="md" disableGutters>
      <Login />
    </Container>
  );
};
