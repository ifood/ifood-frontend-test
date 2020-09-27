import { call, put, takeEvery, select } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import spotifyApi from 'services/api'

import { paramsFactory, getErrorMessage } from 'utils'

import { getPlaylistRequest, getPlaylistSuccess, getPlaylistFailure } from '.'

export default function* rootSaga() {
  yield takeEvery(getPlaylistRequest, allPlaylists)
}

function* allPlaylists() {
  try {
    const {
      filter: { country, locale, limit, offset, timestamp } = {},
    } = yield select()

    const params = {}
    paramsFactory(params, ['country', country])
    paramsFactory(params, ['locale', locale])
    paramsFactory(params, ['limit', limit])
    paramsFactory(params, ['offset', offset])
    paramsFactory(params, ['timestamp', timestamp])

    const { data } = yield call(spotifyApi.get, `/browse/featured-playlists`, {
      params,
    })

    yield put(getPlaylistSuccess(data))
  } catch (error) {
    const errorMessage = getErrorMessage(error)
    toast.dark(errorMessage)

    yield put(getPlaylistFailure(error.toString()))
  }
}
