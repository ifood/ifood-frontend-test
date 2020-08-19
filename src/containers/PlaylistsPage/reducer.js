import produce from 'immer'

import { FETCH_FILTERS, FETCH_FILTERS_SUCCESS, FETCH_FILTERS_FAILURE } from './actions'

export const initialState = {
  filters: {
    resource: [],
    isLoading: false,
    error: null,
  },
}

/* eslint-disable default-case, no-param-reassign */
const playlistsPageReducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case FETCH_FILTERS: {
      draft.filters.isLoading = true
      // Reinitialize error in case we start reloading it
      draft.filters.error = null
      break
    }
    case FETCH_FILTERS_SUCCESS: {
      draft.filters.isLoading = false
      draft.filters.error = null
      draft.filters.resource = action.response.filters
      break
    }
    case FETCH_FILTERS_FAILURE: {
      draft.filters.isLoading = false
      draft.filters.error = action.error
      break
    }
  }
})

export default playlistsPageReducer
