import React, { createContext, useState, useContext, useEffect } from 'react';

import filtersService from '../services/filtersService';

interface Filter {
  [key: string]: string;
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
}

const FiltersContext = createContext<FiltersContextInterface>(
  {} as FiltersContextInterface,
);

export const FiltersProvider: React.FC = ({ children }) => {
  const [defaultFilters, setDefaultFilters] = useState([]);

  useEffect(() => {
    async function getFilters(): Promise<void> {
      const {
        data: { filters },
      } = await filtersService.get('/');

      setDefaultFilters(filters);
    }

    getFilters();
  }, []);

  return (
    <FiltersContext.Provider value={{ defaultFilters }}>
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
