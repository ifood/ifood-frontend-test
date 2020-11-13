import { takeLatest, call, put, fork, select } from 'redux-saga/effects'
import {
  types,
  getPlaylistSuccess,
  getPlaylistError,
  filterPlaylistSuccess,
  filterPlaylistAction,
} from '../actions/playlist'
import { getPlaylistAPI } from '../../api/playlist'
import { getToken, getNewToken } from '../../service/spotifyAuth'
import {
  selectLocalFilter,
  selectAllPlaylists,
} from '../reducer/PlaylistReducer'
import { isNull } from 'lodash'

function* getPlaylist({ filter }) {
  try {
    const token = yield getToken()

    const response = yield call(getPlaylistAPI, { token, filter })
    const playlists = response.data.playlists.items

    yield put(getPlaylistSuccess({ playlists, filter }))
    yield put(filterPlaylistAction({ playlists }))
  } catch (e) {
    const { status } = e.response

    switch (status) {
      case 401:
        yield getNewToken()
        yield put(
          getPlaylistError({
            error:
              'Ocorreu um erro ao obter os dados tente novamente recarregando a pagina',
          })
        )
        break

      default:
        yield put(
          getPlaylistError({
            error:
              'Houve um erro ao apresentar o resultado, confira os filtros e tente novamente',
          })
        )
    }
  }
}

function* watchGetPlaylistRequest() {
  yield takeLatest(types.GET_PLAYLIST_REQUEST, getPlaylist)
}

function* filterPlaylist({ playlists, filter }) {
  try {
    const currentFilter = !isNull(filter)
      ? filter
      : yield select(selectLocalFilter)
    const currentPlaylists = playlists || (yield select(selectAllPlaylists))

    let playlistsFiltered

    if (currentFilter === '') {
      playlistsFiltered = [...currentPlaylists]
    } else {
      playlistsFiltered = currentPlaylists.filter(({ name }) =>
        name.toUpperCase().includes(currentFilter.toUpperCase())
      )
    }

    yield put(
      filterPlaylistSuccess({
        filter: currentFilter,
        playlistsFiltered,
      })
    )
  } catch (e) {
    yield put(
      getPlaylistError({
        error: 'An error occurred when trying to get filter Playlist',
      })
    )
  }
}

function* watchFilterPlaylist() {
  yield takeLatest(types.FILTER_PLAYLIST, filterPlaylist)
}

const playlistSagas = [fork(watchGetPlaylistRequest), fork(watchFilterPlaylist)]

export default playlistSagas
