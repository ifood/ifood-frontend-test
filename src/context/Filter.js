import React from "react";
import { getFilters } from "../services/filter";
export const FilterStateContext = React.createContext();
export const FilterDispatchContext = React.createContext();
export const errorMessage = "Não foi possível carregar os campos de filtro!";

const initialState = {
  filters: [],
  selectedFilters: [{ locale: "pt_BR" }],
  loading: false,
  error: "",
};

function FilterReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING": {
      return { ...state, loading: action.payload };
    }
    case "LOAD": {
      return { ...state, filters: action.payload.filters };
    }
    case "UPDATE_SELECTED_FILTER": {
      return {
        ...state,
        selectedFilters: {
          ...state.selectedFilters,
          ...action.payload,
        },
      };
    }
    case "ERROR": {
      return { ...state, error: action.payload };
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
    dispatch({ type: "LOADING", payload: true });
    const filters = await getFilters();

    dispatch({ type: "LOAD", payload: filters });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    dispatch({ type: "LOADING", payload: false });
    dispatch({
      type: "ERROR",
      payload: errorMessage,
    });
  }
}

export { FilterProvider, loadFilter };
