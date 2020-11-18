import { API_FILTER_CHANGE } from "../actions/actionTypes";

const initialState = { 
  apiFilterSelectedValues:{
    limit: 6,
    offset: 0
  }
};

export const apiFilterChangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_FILTER_CHANGE:
      return {
        ...state,
        apiFilterSelectedValues: action.apiFilterSelectedValues
      };
    default:
      return state;
  }
};
