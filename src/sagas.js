import { all } from 'redux-saga/effects';
import playlistsSaga from './containers/Playlists/Playlists.sagas';

function* rootSaga() {
  yield all([
    playlistsSaga(),
  ]);
}

export default rootSaga;
