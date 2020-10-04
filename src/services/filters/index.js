import axios from "axios";

import { FILTERS_API_URL } from "constants/config";

const FiltersApiService = () => {
  const getFilters = async () => {
    const response = await axios.get(FILTERS_API_URL);

    const {
      data: { filters },
    } = response;

    return filters;
  };

  return { getFilters };
};

export default FiltersApiService;
