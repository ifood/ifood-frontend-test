import axios from 'axios';

export const getFilters = async () => {
  try {
    const filters = await axios.get('https://run.mocky.io/v3/7caca51a-d998-4919-ad8e-080600d74707');

    return filters.data.filters;
  } catch (e) {
    throw e;
  }
};
