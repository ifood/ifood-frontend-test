import { createSlice } from '@reduxjs/toolkit'
import extend from 'lodash/extend'

const initialState = {
  loading: false,
  playlists: [],
  error: null,
}

const { actions, reducer } = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    getPlaylistRequest: (state) => extend(state, { loading: true }),
    getPlaylistSuccess: (state) => extend(state, { loading: false }),
    getPlaylistFailure: (state) => extend(state, { loading: false }),
  },
})

export const {
  getPlaylistRequest,
  getPlaylistSuccess,
  getPlaylistFailure,
} = actions

export { default as playlistSaga } from './sagas'

export default reducer
