import { put, takeLatest } from "redux-saga/effects";

import { API } from "services/api";
import { PlaylistsTypes, PlaylistsActions } from "store/ducks/playlists";
import { GET } from "utils/constants/verbs";
import { FEATURED_PLAYLISTS } from "utils/constants/endpoints";

export function* watchSagas() {
  yield takeLatest(PlaylistsTypes.PLAYLISTS, getPlaylists);
}

export function* getPlaylists({ payload }) {
  try {
    const { data } = yield API({
      method: GET,
      url: FEATURED_PLAYLISTS,
      params: payload,
    });

    yield put(PlaylistsActions.playlistsSuccess(data));
  } catch ({ response }) {
    yield put(PlaylistsActions.playlistsFailure(response.data.error));
  }
}
