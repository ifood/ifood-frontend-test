export const filtersDefault = {
  filters: {},
};

export const UPDATE = 'UPDATE';
export const RESET = 'RESET';

export const filtersReducer = (state, action) => {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        filters: action.value,
      };
    case RESET:
      return {
        ...state,
        filters: {},
      };
    default:
      return state;
  }
};
