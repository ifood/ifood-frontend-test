import { call, put, takeLatest } from 'redux-saga/effects'
import * as api from '../../services/spotify'
import { Types } from '.'

function* getPlaylists(action) {
  try {
    const { data } = yield call(api.getPlaylists, action.payload)
    yield put({ type: Types.GET_PLAYLISTS_SUCCESS, payload: data })
  } catch (err) {
    const {
      response: { data }
    } = err

    yield put({
      type: Types.GET_PLAYLISTS_FAIL,
      payload: { error: data.error || err.message }
    })
  }
}

export const playlistSagas = [takeLatest(Types.GET_PLAYLISTS, getPlaylists)]
