import React, {
  createContext,
  useCallback,
  useLayoutEffect,
  useState
} from "react";
import { Filter, FilterContextProps } from "../../interfaces";
import FilterService from "../../services/FilterService";
import { useSnackbar } from 'notistack';

const FilterContext = createContext<FilterContextProps>({} as FilterContextProps);

const FilterProvider: React.FC = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [locales, setLocales] = useState<Filter>({});
  const [countries, setCountries] = useState<Filter>({});
  const [timestamp, setTimestamp] = useState<Filter>({});
  const [quantity, setQuantity] = useState<Filter>({});
  const [page, setPage] = useState<Filter>({});

  const getFilters = useCallback(async (): Promise<any> => {
    return await FilterService.getFilters();
  }, []);

  useLayoutEffect(() => {
    const setFilters = async () => {
      const filters = await getFilters();
      setLocales(filters[0]);
      setCountries(filters[1]);
      setTimestamp(filters[2]);
      setQuantity(filters[3]);
      setPage(filters[4]);
    }

    setFilters()
      .catch(() => enqueueSnackbar('Outch! Sorry dude, it\'s not a possible load de filter. Try again'));
  }, [enqueueSnackbar, getFilters])

  return (
    <FilterContext.Provider value={ {
      isLoading,
      setIsLoading,
      locales,
      countries,
      timestamp,
      quantity,
      page
    } }>
      { children }
    </FilterContext.Provider>
  )
}

export { FilterProvider, FilterContext };
