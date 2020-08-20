import produce from 'immer'

import {
  FETCH_FILTERS,
  FETCH_FILTERS_SUCCESS,
  FETCH_FILTERS_FAILURE,
  FETCH_PLAYLISTS,
  FETCH_PLAYLISTS_SUCCESS,
  FETCH_PLAYLISTS_FAILURE,
  UPDATE_FILTER_VALUES,
} from './actions'

export const initialState = {
  filterValues: {},
  filters: {
    resource: [],
    isLoading: false,
    error: null,
  },
  playlists: {
    resource: {},
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
    case FETCH_PLAYLISTS: {
      draft.playlists.isLoading = true
      // Reinitialize error in case we start reloading it
      draft.playlists.error = null
      break
    }
    case FETCH_PLAYLISTS_SUCCESS: {
      draft.playlists.isLoading = false
      draft.playlists.error = null
      draft.playlists.resource = action.response
      break
    }
    case FETCH_PLAYLISTS_FAILURE: {
      draft.playlists.isLoading = false
      draft.playlists.error = action.error
      break
    }
    case UPDATE_FILTER_VALUES: {
      draft.filterValues[action.filterId] = action.value
      break
    }
  }
})

export default playlistsPageReducer
