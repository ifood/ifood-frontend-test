import { createActions, createReducer } from "reduxsauce";

export const { Types: FilterTypes, Creators: FilterActions } = createActions({
  fetchFilter: [],
  fetchFilterSuccess: ["response"],
  fetchFilterFailure: ["error"],
});

export const INITIAL_STATE = {
  isLoading: false,
  isSuccess: false,
  options: [],
  error: "",
};

const fetchFilter = (state) => ({
  ...state,
  isLoading: true,
});

const fetchFilterSuccess = (state, { response }) => ({
  ...state,
  isLoading: false,
  isSuccess: true,
  options: response.filters,
  error: "",
});

const fetchFilterFailure = (state, { error }) => ({
  ...state,
  isLoading: false,
  isSuccess: false,
  error: error.message,
});

export default createReducer(INITIAL_STATE, {
  [FilterTypes.FETCH_FILTER]: fetchFilter,
  [FilterTypes.FETCH_FILTER_SUCCESS]: fetchFilterSuccess,
  [FilterTypes.FETCH_FILTER_FAILURE]: fetchFilterFailure,
});
