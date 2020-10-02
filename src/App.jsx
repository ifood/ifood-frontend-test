import React, { useEffect, useState } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './auth/AuthContext';
import { getToken } from './utils/TokenController';
import { getHashObject, resetHash } from './utils/Hash';
import Loading from './view/loading/Loading';
import AppRoutes from './view/AppRoutes';
import { VIEW_STATUS } from './Constants';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EA1D2C',
    },
    secondary: {
      main: '#1ED760',
    },
    typography: {
      h5: {
        fontWeight: 700,
      },
    },
    type: 'dark',
  },
});

function getAuthHash(storagedState) {
  const hash = getHashObject();

  if (hash?.access_token != null && storagedState === hash.state) {
    return hash;
  }

  return null;
}

export default function App() {
  const [auth, setAuth] = useState(null);
  const [status, setStatus] = useState(VIEW_STATUS.LOADING);

  function handleLogout() {
    setAuth(null);
    resetHash();
  }

  useEffect(() => {
    const storageToken = getToken();
    const authHash = getAuthHash(storageToken);

    if (authHash != null) {
      setAuth({ ...authHash, logout: handleLogout });
    }

    setStatus(VIEW_STATUS.DATA);
  }, []);

  return (
    <AuthContext.Provider value={auth}>
      <MuiThemeProvider theme={theme}>
        {status === VIEW_STATUS.LOADING && <Loading />}
        {status === VIEW_STATUS.DATA && (
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        )}
      </MuiThemeProvider>
    </AuthContext.Provider>
  );
}
