import { GET_PLAYLISTS_SUCCESS, GET_PLAYLISTS_FAILURE, SET_LOADING } from './types'
import { fetchPlaylists } from '../../api/spotify'

export const getPlaylist = (params) => async dispatch => {
  try {
    dispatch(setLoading(true))
    const data = await fetchPlaylists(params)
    dispatch(getPlaylistSuccess(data))
    dispatch(setLoading(false))
  } catch(e) {
    dispatch(getPlaylistFailure(e))
  }
}

export const getPlaylistSuccess = (data) => ({
    type: GET_PLAYLISTS_SUCCESS,
    payload: data,
})

export const getPlaylistFailure = error => ({
  type: GET_PLAYLISTS_FAILURE,
  payload: {
    error
  }
})

export const setLoading = (data) => ({
  type: SET_LOADING,
  payload: data
})
