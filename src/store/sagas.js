import { all } from 'redux-saga/effects'

import { formFieldsSagas } from './form-filters/saga'
import { playlistSagas } from './playlists/saga'

function* rootSaga() {
  yield all([...formFieldsSagas, ...playlistSagas])
}

export default rootSaga
