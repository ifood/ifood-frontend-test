import { AuthAction } from './actions';
import * as types from './types';

export interface IAuthState {
  token: string | null;
}

export const initialState: IAuthState = {
  token: null,
};

export default (
  state: IAuthState = initialState,
  action: AuthAction,
): IAuthState => {
  switch (action.type) {
    case types.AUTH_TOKEN_SET:
      return { ...state, token: action.token };
    case types.AUTH_TOKEN_CLEAR:
      return { ...state, token: null };
    default:
      return { ...state };
  }
};
