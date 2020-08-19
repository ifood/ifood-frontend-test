export const FETCH_FILTERS = 'containers/PlaylistsPage/FETCH_FILTERS'
export const FETCH_FILTERS_SUCCESS = 'containers/PlaylistsPage/FETCH_FILTERS_SUCCESS'
export const FETCH_FILTERS_FAILURE = 'containers/PlaylistsPage/FETCH_FILTERS_FAILURE'

export function fetchFiltersAction() {
  return {
    type: FETCH_FILTERS,
  }
}

export function fetchFiltersSuccessAction(response) {
  return {
    type: FETCH_FILTERS_SUCCESS,
    response,
  }
}

export function fetchFiltersFailureAction(error) {
  return {
    type: FETCH_FILTERS_FAILURE,
    error,
  }
}
