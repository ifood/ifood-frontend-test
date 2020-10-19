import React from 'react';
import { Redirect } from 'react-router-dom';

import { authUser } from '../../helpers/auth';

// import { Container } from './styles';

function Playlist() {
  if (!authUser()) return <Redirect to="/login" />;

  return <div>Teste</div>;
}

export default Playlist;
