import React from 'react';

import Loading from '../components/Loading';

import Login from '../pages/Login';
import Home from '../pages/Home';

const Routes: React.FC = () => {
  const isAuthenticated = false;
  const loading = false;

  if (loading) {
    return <Loading />;
  }

  return isAuthenticated ? <Home /> : <Login />;
};

export default Routes;
