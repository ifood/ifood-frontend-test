import { all } from 'redux-saga/effects'
import filterSagas from './filter'
import playlistSagas from './playlist'

export default function* rootSaga() {
  yield all([...filterSagas, ...playlistSagas])
}
