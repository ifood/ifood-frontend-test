import React from 'react';
import { Button } from '@material-ui/core';

import { Wrapper } from './styles';

const logOut = () => {
  window.localStorage.removeItem('spotifyToken');
  window.location.href = '/';
};

const Header = () => {
  return (
    <Wrapper>
      <h2>Spotifood</h2>
      <Button size="small" color="primary" variant="contained" target="_self" onClick={logOut}>
        Sair
      </Button>
    </Wrapper>
  );
};

export default Header;
