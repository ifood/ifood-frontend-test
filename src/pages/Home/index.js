import React, { useContext } from 'react';

import Login from '../../containers/Login';

import { AuthContext } from '../../services/auth';

const Home = () => {
  const auth = useContext(AuthContext);

  if (!auth.isAuthenticated()) return <Login />;

  return (
    <>
      <p>Home page</p>
    </>
  );
};

export default Home;
