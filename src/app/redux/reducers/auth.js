import Immutable from 'seamless-immutable';
import { AuthActions } from '../actions';

const initialState = Immutable({
  auth: null,
});

export default (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case AuthActions.ACTION_AUTH_LOGIN:
      return {
        ...state,
        auth: action.auth,
      };
    default:
      return state;
  }
};

export function getAuth(state) {
  return state.auth.auth;
}
