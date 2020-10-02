import axios from 'axios';
import { MOCKY_FILTERS } from '../config.json';

export const getFilters = async () => {
  try {
    const filters = await axios.get(MOCKY_FILTERS);

    return filters.data.filters;
  } catch (e) {
    throw e;
  }
};
