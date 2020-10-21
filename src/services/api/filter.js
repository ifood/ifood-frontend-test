import axios from 'axios';

import { FILTER_API_URL } from '../../constants';

const FilterApiService = () => {
  const getFilter = async () => {
    const response = await axios.get(FILTER_API_URL);

    return response.data.filters;
  };

  return { getFilter };
};

export default FilterApiService;
