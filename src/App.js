import React from 'react';
import { configure } from 'axios-hooks';

import './styles/global.css';
import Router from './Router';
import { Auth, AuthContext } from './services/auth';
import { api } from './services/spotify';

const auth = new Auth();

configure({
  cache: false,
  axios: api,
});

function App() {
  return (
    <AuthContext.Provider value={auth}>
      <Router />
    </AuthContext.Provider>
  );
}

export default App;
