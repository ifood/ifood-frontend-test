import { useCallback, useEffect, useState } from "react";
import { getFilters } from "../services/filters.service";
import { IFilters } from "../types";


const useFilters = () => {
  const [filters, setFilters] = useState<IFilters[]>([]);

  const handleGetFilters = useCallback(async () => {
    try {
      const filtersData = await getFilters();
      setFilters(filtersData);
    } catch (e) {

    }

  }, []);

  useEffect(() => {
    handleGetFilters();
  }, [handleGetFilters]);

  return filters;
};

export default useFilters;
