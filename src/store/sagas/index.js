import { all, takeLatest } from 'redux-saga/effects';

import { Types as GlobalTypes } from '../ducks/global';
import { getSpotifyFilters, getSpotifyPlaylists } from './global';

export default function* rootSaga() {
  yield all([
    takeLatest(GlobalTypes.GET_SPOTIFY_FILTERS_REQUEST, getSpotifyFilters),
    takeLatest(GlobalTypes.GET_SPOTIFY_PLAYLISTS_REQUEST, getSpotifyPlaylists),
  ]);
}
