import {
  all, call, put, takeEvery, select,
} from 'redux-saga/effects'

import request from '../../utils/request'

import {
  FETCH_FILTERS,
  FETCH_PLAYLISTS,
  fetchFiltersSuccessAction,
  fetchFiltersFailureAction,
  fetchPlaylistsSuccessAction,
  fetchPlaylistsFailureAction,
} from './actions'
import {
  GET_FILTERS_API,
  SPOTIFY_PLAYLISTS_API,
} from '../App/urls'
import { selectFilterValues } from './selectors'

export function* fetchFilters() {
  try {
    const response = yield call(request, GET_FILTERS_API, { method: 'GET' }, false)

    yield put(fetchFiltersSuccessAction(response))
  } catch (error) {
    yield put(fetchFiltersFailureAction(error))
  }
}

export function* fetchPlaylists() {
  const filters = yield select(selectFilterValues)

  try {
    const response = yield call(request, SPOTIFY_PLAYLISTS_API, {
      method: 'GET',
      params: {
        ...filters,
      },
    })

    yield put(fetchPlaylistsSuccessAction(response))
  } catch (error) {
    yield put(fetchPlaylistsFailureAction(error))
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(FETCH_FILTERS, fetchFilters),
    takeEvery(FETCH_PLAYLISTS, fetchPlaylists),
  ])
}
