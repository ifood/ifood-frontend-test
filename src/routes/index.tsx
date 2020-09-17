import React from 'react';

import { useAuth } from '../hooks/auth';

import Loading from '../components/Loading';

import Login from '../pages/Login';
import Home from '../pages/Home';

const Routes: React.FC = () => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return isAuthenticated ? <Home /> : <Login />;
};

export default Routes;
