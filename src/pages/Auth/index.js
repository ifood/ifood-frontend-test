import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import LayoutTemplate from '../../templates/LayoutTemplate';
import LoadingSpinner from '../../components/LoadingSpinner';

import { AuthContext } from '../../services/auth';
import { getHashParams } from '../../utils/params';

const Auth = ({ location }) => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  useEffect(() => {
    const {
      access_token: accessToken,
      token_type: tokenType,
      expires_in: expiresIn,
    } = getHashParams();

    if (!accessToken || !tokenType || !expiresIn) {
      toast.error('An error ocurred! Try login again!');
      history.push('/');
    }

    auth.setSession({
      accessToken,
      tokenType,
      expiresIn,
    });
    history.push('/');
  }, [location, history, auth]);

  return (
    <LayoutTemplate>
      <LoadingSpinner />
      <p style={{ marginTop: '1rem' }}>Validating Spotify authentication...</p>
    </LayoutTemplate>
  );
};

export default Auth;
