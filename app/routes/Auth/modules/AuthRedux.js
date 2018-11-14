export const AUTH_GET_TOKEN_START = 'AUTH_GET_TOKEN_START';
export const AUTH_GET_TOKEN_SUCCESS = 'AUTH_GET_TOKEN_SUCCESS';
export const AUTH_GET_TOKEN_ERROR = 'AUTH_GET_TOKEN_ERROR';
export const AUTH_REDUX_NAME = 'auth';

// initial state
const INITIAL_STATE = {
  error: false,
  fetching: false,
  token: '',
  refreshToken: '',
};

// action handlers
const actionHandlers = {
  [AUTH_GET_TOKEN_START]: state => ({
    ...state,
    fetching: true,
    token: '',
    refreshToken: '',
  }),
  [AUTH_GET_TOKEN_SUCCESS]: (state, { data: { access_token, refresh_token } }) => ({
    ...state,
    token: access_token,
    refreshToken: refresh_token,
  }),
  [AUTH_GET_TOKEN_ERROR]: (state, { error }) => ({
    ...state,
    error,
  }),
};

// action creators
export function setupToken(code) {
  return { type: AUTH_GET_TOKEN_START, code };
}

// selectors
export function getAuthStore(state) {
  return state[AUTH_REDUX_NAME];
}

// defaut reducer function
export default function reducer(state = INITIAL_STATE, action) {
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;
}
