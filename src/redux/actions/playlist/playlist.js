import { GET_PLAYLISTS_SUCCESS, GET_PLAYLISTS_FAILURE } from '../types'
import { fetchPlaylists } from '../../../api/spotify'

export const getPlaylists = (params) => async dispatch => {
  try {
    const data = await fetchPlaylists(params)
    dispatch(getPlaylistsSuccess(data))
  } catch(e) {
    dispatch(getPlaylistsFailure(e))
  }
}

export const getPlaylistsSuccess = (data) => {
  return {
    type: GET_PLAYLISTS_SUCCESS,
    payload: data,
  }
}

export const getPlaylistsFailure = error => ({
  type: GET_PLAYLISTS_FAILURE,
  payload: error.message
})
