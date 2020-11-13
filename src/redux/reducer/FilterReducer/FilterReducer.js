import { types } from '../../actions/filter'

const initialState = {
  filters: [],
  isFetching: false,
  error: {},
}

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FILTER_REQUEST:
      return { ...state, isFetching: true }

    case types.GET_FILTER_SUCCESS:
      return {
        ...state,
        filters: action.filters,
        isFetching: false,
        error: null,
      }

    case types.GET_FILTER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }

    default:
      return state
  }
}
