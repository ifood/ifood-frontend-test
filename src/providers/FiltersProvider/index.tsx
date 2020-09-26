import React, { createContext, useCallback, useState } from "react";
import { FilterContextProps } from "../../interfaces";
import FilterService from "../../services/FilterService";
import { Filter } from "../../interfaces/Filter";

const FilterContext = createContext<FilterContextProps>({} as FilterContextProps);

const FilterProvider: React.FC = ({ children }) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getFilters = useCallback(async (): Promise<Filter[]> => {
    return await FilterService.getFilters();
  }, []);

  return (
    <FilterContext.Provider value={ { getFilters, isLoading, setIsLoading } }>
      { children }
    </FilterContext.Provider>
  )
}

export { FilterProvider, FilterContext };
