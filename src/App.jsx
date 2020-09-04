import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Routes from './screens/Routes';
import { getHashAsObject, cleanHash } from './utils/LocationUtil';
import AuthorizationContext from './core/AuthorizationContext';
import { SPOTIFY_STATE_KEY } from './Constants';
import { getMessagesByLocale, getLocale } from './core/l10n/L10n';
import Loading from './component/Loading';

const locale = getLocale();
const messages = getMessagesByLocale(locale);

const APP_STATE = {
  DONE: Symbol('done'),
  PREPARING: Symbol('preparing'),
};

function extractValidAuthorizationFromHash(storagedState) {
  const hash = getHashAsObject();
  if (hash?.access_token != null && storagedState === hash.state) {
    return hash;
  }
  return null;
}

export default function App() {
  const [authorization, setAuthorization] = useState(null);
  const [appState, setAppState] = useState(APP_STATE.PREPARING);

  function handleLogout() {
    setAuthorization(null);
    cleanHash();
  }

  useEffect(() => {
    const storagedState = localStorage.getItem(SPOTIFY_STATE_KEY);
    const auth = extractValidAuthorizationFromHash(storagedState);
    if (auth != null) {
      setAuthorization({ ...auth, logout: handleLogout });
    }
    setAppState(APP_STATE.DONE);
  }, []);

  return (
    <AuthorizationContext.Provider value={authorization}>
      <IntlProvider locale={locale} messages={messages}>
        {appState === APP_STATE.PREPARING && <Loading />}
        {appState === APP_STATE.DONE && (
          <Router>
            <Routes />
          </Router>
        )}
      </IntlProvider>
    </AuthorizationContext.Provider>
  );
}
