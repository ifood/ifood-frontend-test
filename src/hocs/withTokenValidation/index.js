import React from 'react';
import PropTypes from 'prop-types';
import { withSnackbar } from 'notistack';
import { withRouter } from 'react-router-dom';

import { getStorageStatus } from 'utils';

export const withTokenValidation = (WrappedComponent) => {
  const WithToken = ({ enqueueSnackbar, history }) => {
    if (window.location.hash) {
      return <WrappedComponent enqueueSnackbar={enqueueSnackbar} />;
    }

    const storageStatus = getStorageStatus();

    if (storageStatus === 'token-valid' && window.location.pathname !== '/playlists') {
      history.push({ pathname: '/playlists' });
      return null;
    }

    if (storageStatus === 'token-expired') {
      enqueueSnackbar('Access expired. Please authorize the application again.', { variant: 'error' });
      window.localStorage.removeItem('spotifyToken');
      if (window.location.pathname === '/playlists') {
        history.push({ pathname: '/' });
        return null;
      }
    }

    if (storageStatus === 'first-access') {
      if (window.location.pathname === '/playlists') {
        history.push({ pathname: '/' });
        return null;
      }
    }

    return <WrappedComponent enqueueSnackbar={enqueueSnackbar} />;
  };

  WithToken.propTypes = {
    enqueueSnackbar: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  };

  return withRouter(withSnackbar(WithToken));
};
