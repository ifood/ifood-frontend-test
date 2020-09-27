import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useIntl, FormattedMessage } from 'react-intl';

import LayoutTemplate from '../../templates/LayoutTemplate';
import LoadingSpinner from '../../components/LoadingSpinner';
import messages from './messages';

import { AuthContext } from '../../services/auth';
import { getHashParams } from '../../utils/params';

const Auth = ({ location }) => {
  const intl = useIntl();
  const history = useHistory();
  const auth = useContext(AuthContext);

  useEffect(() => {
    const {
      access_token: accessToken,
      token_type: tokenType,
      expires_in: expiresIn,
    } = getHashParams();

    if (!accessToken || !tokenType || !expiresIn) {
      toast.error(intl.formatMessage(messages.errors.unknown));
      history.push('/');
    }

    auth.setSession({
      accessToken,
      tokenType,
      expiresIn,
    });
    history.push('/');
  }, [location, history, auth, intl]);

  return (
    <LayoutTemplate>
      <LoadingSpinner />
      <p style={{ marginTop: '1rem' }}>
        <FormattedMessage {...messages.validating} />
      </p>
    </LayoutTemplate>
  );
};

export default Auth;
