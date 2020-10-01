import axios from 'axios';

export const getFilters = async () => {
  try {
    const filters = await axios.get('http://www.mocky.io/v2/5a25fade2e0000213aa90776');

    return filters.data.filters;
  } catch (e) {
    throw e;
  }
};
