import { put, takeLatest } from "redux-saga/effects";

import { API } from "services/api";
import { UserTypes, UserActions } from "store/ducks/user";
import { GET } from "utils/constants/verbs";
import { GET_USER } from "utils/constants/endpoints";

export function* watchSagas() {
  yield takeLatest(UserTypes.GET_USER, getUser);
}

export function* getUser() {
  try {
    const { data } = yield API({
      method: GET,
      url: GET_USER,
    });

    yield put(UserActions.getUserSuccess(data));
  } catch ({ response }) {
    yield put(UserActions.getUserFailure(response.data.error));
  }
}
