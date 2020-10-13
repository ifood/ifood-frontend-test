import { createActions, createReducer } from "reduxsauce";

export const { Types: AuthTypes, Creators: AuthActions } = createActions({
  auth: ["payload"],
  authSuccess: ["response"],
  authFailure: ["error"],
});

export const INITIAL_STATE = {
  isLoading: false,
  isSuccess: false,
  data: [],
  error: [],
};

const auth = (state) => ({
  ...state,
  isLoading: true,
});

const authSuccess = (state, { response }) => ({
  ...state,
  isLoading: false,
  isSuccess: true,
  data: response,
});

const authFailure = (state, { error }) => ({
  ...state,
  isLoading: false,
  isSuccess: false,
  error,
});

export default createReducer(INITIAL_STATE, {
  [AuthTypes.AUTH]: auth,
  [AuthTypes.AUTH_SUCCESS]: authSuccess,
  [AuthTypes.AUTH_FAILURE]: authFailure,
});
