import FiltersApi from './api'

export const getFilters = async () => {
  return (await FiltersApi.get()).data
}
