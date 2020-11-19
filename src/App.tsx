import { configure } from 'axios-hooks';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthContext from './context/authentication/auth';
import Routes from './routes';
import api from './services/api/api';
import Auth from './services/auth';
import GlobalStyles from './styles/global';

const auth = new Auth();

configure({
  cache: false,
  axios: api,
});

const App = () => (
  <BrowserRouter>
    <AuthContext.Provider value={auth}>
      <Routes />
    </AuthContext.Provider>
    <GlobalStyles />
  </BrowserRouter>
);

export default App;
