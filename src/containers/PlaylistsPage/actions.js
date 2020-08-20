export const FETCH_FILTERS = 'containers/PlaylistsPage/FETCH_FILTERS'
export const FETCH_FILTERS_SUCCESS = 'containers/PlaylistsPage/FETCH_FILTERS_SUCCESS'
export const FETCH_FILTERS_FAILURE = 'containers/PlaylistsPage/FETCH_FILTERS_FAILURE'
export const FETCH_PLAYLISTS = 'containers/PlaylistsPage/FETCH_PLAYLISTS'
export const FETCH_PLAYLISTS_SUCCESS = 'containers/PlaylistsPage/FETCH_PLAYLISTS_SUCCESS'
export const FETCH_PLAYLISTS_FAILURE = 'containers/PlaylistsPage/FETCH_PLAYLISTS_FAILURE'
export const UPDATE_FILTER_VALUES = 'containers/PlaylistsPage/UPDATE_FILTER_VALUES'

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

export function fetchPlaylistsAction() {
  return {
    type: FETCH_PLAYLISTS,
  }
}

export function fetchPlaylistsSuccessAction(response) {
  return {
    type: FETCH_PLAYLISTS_SUCCESS,
    response,
  }
}

export function fetchPlaylistsFailureAction(error) {
  return {
    type: FETCH_PLAYLISTS_FAILURE,
    error,
  }
}

export function updateFilterValuesAction(filterId, value) {
  return {
    type: UPDATE_FILTER_VALUES,
    filterId,
    value,
  }
}
