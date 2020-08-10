import { all } from 'redux-saga/effects';
import playlist from './playlist/sagas';

export default function* rootSaga() {
  yield all([playlist()]);
}
