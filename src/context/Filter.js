import React from "react";
import { getFilters } from "../services/filter";
export const FilterStateContext = React.createContext();
export const FilterDispatchContext = React.createContext();

const initialState = {
  filters: [],
  selectedFilters: [],
};

function FilterReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD": {
      return { ...state, filters: action.payload.filters };
    }
    case "UPDATE_SELECTED_FILTER": {
      console.log(action.payload);
      return {
        ...state,
        selectedFilters: {
          ...state.selectedFilters,
          ...action.payload,
        },
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function FilterProvider({ children }) {
  const [state, dispatch] = React.useReducer(FilterReducer, initialState);
  return (
    <FilterStateContext.Provider value={state}>
      <FilterDispatchContext.Provider value={dispatch}>
        {children}
      </FilterDispatchContext.Provider>
    </FilterStateContext.Provider>
  );
}

async function loadFilter(dispatch) {
  try {
    const filters = await getFilters();
    dispatch({ type: "LOAD", payload: filters });
  } catch (error) {
    // dispatch({ type: "fail update", error });
  }
}

export { FilterProvider, loadFilter };
