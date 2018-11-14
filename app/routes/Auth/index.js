import React from 'react';
import AuthContainer from './containers/AuthContainer';
import AuthReducer, { AUTH_REDUX_NAME } from './modules/AuthRedux';
import AuthSagas from  './modules/AuthSagas';

const AuthWrapper = (store) => {
  store.registerReducer(AUTH_REDUX_NAME, AuthReducer);
  store.runSaga(AuthSagas);

  return <AuthContainer />;
};

export default AuthWrapper;
