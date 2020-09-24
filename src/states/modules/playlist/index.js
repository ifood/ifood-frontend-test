import { createSlice } from '@reduxjs/toolkit'
import extend from 'lodash/extend'

import { selectAllPlaylists } from './selectors'

const initialState = {
  loading: false,
  playlists: [],
  total: 0,
  error: null,
}

const { actions, reducer } = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    getPlaylistRequest: (state) => extend(state, { loading: true }),
    getPlaylistSuccess: (state, { payload }) =>
      extend(state, {
        loading: false,
        playlists: selectAllPlaylists(payload.playlists),
        total: payload.playlists.total,
        error: null,
      }),
    getPlaylistFailure: (state, { payload }) =>
      extend(state, { loading: false, error: payload }),
  },
})

export const {
  getPlaylistRequest,
  getPlaylistSuccess,
  getPlaylistFailure,
} = actions

export { default as playlistSaga } from './sagas'

export default reducer
