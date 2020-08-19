import produce from 'immer'

import { FETCH_FILTERS } from './actions'

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
  }
})

export default playlistsPageReducer
