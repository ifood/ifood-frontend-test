import { isEmpty } from 'lodash'

export const selectFilters = (state) => state.filter
export const selectAllFilters = (state) => state.filter.filters
export const selectIsFetchingFilters = (state) => state.filter.isFetching
export const selectHasErrorFilters = (state) => !isEmpty(state.filter.error)
