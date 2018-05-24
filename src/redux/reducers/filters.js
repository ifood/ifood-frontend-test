import { UPDATE_FILTERS } from '../actions/actionTypes';

export const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FILTERS:
      return {
        ...state,
        filters: action.values,
      };
    default:
      return state;
  }
};
