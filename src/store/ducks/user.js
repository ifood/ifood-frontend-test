import { createActions, createReducer } from "reduxsauce";

export const { Types: UserTypes, Creators: UserActions } = createActions({
  getUser: ["payload"],
  getUserSuccess: ["response"],
  getUserFailure: ["error"],
});

export const INITIAL_STATE = {
  isLoading: false,
  isSuccess: false,
  userName: "",
  error: "",
};

const getUser = (state) => ({
  ...state,
  isLoading: true,
});

const getUserSuccess = (state, { response }) => ({
  ...state,
  isLoading: false,
  isSuccess: true,
  userName: response.display_name,
  error: "",
});

const getUserFailure = (state, { error }) => ({
  ...state,
  isLoading: false,
  isSuccess: false,
  error: error.message,
});

export default createReducer(INITIAL_STATE, {
  [UserTypes.GET_USER]: getUser,
  [UserTypes.GET_USER_SUCCESS]: getUserSuccess,
  [UserTypes.GET_USER_FAILURE]: getUserFailure,
});
