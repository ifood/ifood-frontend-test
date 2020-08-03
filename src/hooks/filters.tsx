import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';

import filtersService from '../services/filtersService';

interface Filter {
  [key: string]: string;
}

interface Filters {
  search?: string;
  locale?: Array<string>;
  country?: Array<string>;
  timestamp?: string;
  quantity: 25;
}

interface FiltersContextInterface {
  defaultFilters: Array<{
    id: 'locale' | 'country' | 'timestamp' | 'limit' | 'offset';
    name: string;
    values?: Array<{
      value: string;
      name: string;
      validation?: object;
    }>;
  }>;
  filtersApplied: Filters;
  setFilters(filters: Filters): void;
}

const FiltersContext = createContext<FiltersContextInterface>(
  {} as FiltersContextInterface,
);

export const FiltersProvider: React.FC = ({ children }) => {
  const [defaultFilters, setDefaultFilters] = useState([]);
  const [filtersApplied, setFiltersApplied] = useState<Filters>({} as Filters);

  useEffect(() => {
    async function getFilters(): Promise<void> {
      const {
        data: { filters },
      } = await filtersService.get('/');

      setDefaultFilters(filters);
    }

    getFilters();
  }, []);

  const setFilters = useCallback((filters: Filters) => {
    setFiltersApplied(filters);
  }, []);

  return (
    <FiltersContext.Provider
      value={{ defaultFilters, setFilters, filtersApplied }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export function useFilters(): FiltersContextInterface {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error('useFilters must be used within an FiltersContext');
  }

  return context;
}
