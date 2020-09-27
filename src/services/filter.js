import axios from 'axios';

const { REACT_APP_FILTERS_API_URL } = process.env;

const api = axios.create({
  baseURL: REACT_APP_FILTERS_API_URL,
});

const getFilters = async () => {
  const { data } = await api.get('/');
  const { filters } = data;

  return filters;
};

export { getFilters };
