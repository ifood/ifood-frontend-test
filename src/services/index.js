import Axios from 'axios';

export const getFilters = async () => {
  const { data } = await Axios.get('http://www.mocky.io/v2/5a25fade2e0000213aa90776');

  return data.filters;
};
