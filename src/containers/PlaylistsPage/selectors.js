import { createSelector } from 'reselect'
import { initialState } from './reducer'

export const selectFilters = (state) => state.filters || initialState.filters

export const selectFiltersResource = createSelector(
  selectFilters,
  (substate) => substate.resource,
)

export const selectFiltersIsLoading = createSelector(
  selectFilters,
  (substate) => substate.isLoading,
)
