export const types = {
  GET_PLAYLIST_REQUEST: 'playlist/get_playlist_request',
  GET_PLAYLIST_SUCCESS: 'playlist/get_playlist_success',
  GET_PLAYLIST_ERROR: 'playlist/get_playlist_error',
  FILTER_PLAYLIST: 'playlist/filter_playlist',
  FILTER_PLAYLIST_SUCCESS: 'playlist/filter_playlist_success',
}

export const getPlaylistRequest = ({ filter, updateIsFetching = true }) => ({
  type: types.GET_PLAYLIST_REQUEST,
  filter,
  updateIsFetching,
})

export const getPlaylistSuccess = ({ playlists, filter }) => ({
  type: types.GET_PLAYLIST_SUCCESS,
  playlists,
  filter,
})

export const getPlaylistError = ({ error }) => ({
  type: types.GET_PLAYLIST_ERROR,
  filter: 'error',
  error,
})

export const filterPlaylistAction = ({ filter = null, playlists = null }) => ({
  type: types.FILTER_PLAYLIST,
  filter,
  playlists,
})

export const filterPlaylistSuccess = ({ filter, playlistsFiltered }) => ({
  type: types.FILTER_PLAYLIST_SUCCESS,
  filter,
  playlistsFiltered,
})
