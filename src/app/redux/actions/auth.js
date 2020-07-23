
export const ACTION_AUTH_LOGIN = 'ACTION_AUTH_LOGIN';

export const saveAuthentication = (authData) => ({
  type: ACTION_AUTH_LOGIN,
  auth: authData,
});
