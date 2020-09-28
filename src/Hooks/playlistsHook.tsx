import React, { createContext, useCallback, useContext, useState } from "react";

import { IFilterQuery } from "../Services/spotifyService";

interface IFilterContext {
  filter?: IFilterQuery;
  updateFilter(updatedFilter: IFilterQuery): void;
}

interface IFilterContextProps {
  children: React.ReactNode;
}

const FilterContext = createContext<IFilterContext>({} as IFilterContext);

const FilterProvider: React.FC<IFilterContextProps> = ({
  children,
}: IFilterContextProps) => {
  const [filter, setFilter] = useState<IFilterQuery>({} as IFilterQuery);

  const updateFilter = useCallback((updatedFilter: IFilterQuery) => {
    setFilter(updatedFilter);
  }, []);

  return (
    <FilterContext.Provider value={{ filter, updateFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

function useFilter(): IFilterContext {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilter must be used within an AuthProvider");
  }

  return context;
}

export { FilterProvider, useFilter };
