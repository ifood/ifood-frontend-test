import { useCallback, useEffect, useState } from "react";
import { getFilters } from "../services/filters.service";
import { IFilters } from "../types";
import Swal from 'sweetalert2';


const useFilters = () => {
  const [filters, setFilters] = useState<IFilters[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGetFilters = useCallback(async () => {
    setLoading(true);
    try {
      const filtersData = await getFilters();
      setFilters(filtersData);
    } catch (e) {
      Swal.fire({
        text: 'Error to get filters, try again...',
        icon: 'error',
      });
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    handleGetFilters();
  }, [handleGetFilters]);

  return {
    filters,
    loading
  };
};

export default useFilters;
