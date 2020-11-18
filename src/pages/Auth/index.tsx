import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/authentication/auth';
import ParamService from '../../services/api/param';

const Auth = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    const { accessToken, tokenType, expiresIn } = ParamService.filterParam(
      'hash',
    );
    if (!accessToken || !tokenType || !expiresIn) {
      history.push('/login');
    }
    auth.setSession({ accessToken, tokenType, expiresIn });
    history.push('/home');
  }, [auth, history]);

  return <p>Wating authentication</p>;
};

export default Auth;
