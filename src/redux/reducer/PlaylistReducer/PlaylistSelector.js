import { isNull } from 'lodash'

export const selectPlaylists = (state) => state.playlist
export const selectApiFilter = (state) => state.playlist.apiFilter
export const selectLocalFilter = (state) => state.playlist.localFilter
export const selectAllPlaylists = (state) => state.playlist.playlists
export const selectIsFetchingPlaylists = (state) => state.playlist.isFetching
export const selectHasErrorPlaylists = (state) => !isNull(state.playlist.error)
