import { put, takeLatest } from "redux-saga/effects";
import ls from "local-storage";

import { history } from "store";
import { AuthTypes, AuthActions } from "store/ducks/auth";
import { POST } from "utils/constants/verbs";
import { AUTH } from "utils/constants/endpoints";
import {
  clientID,
  clientSecret,
  redirect_url,
} from "utils/constants/constants";

export function* watchSagas() {
  yield takeLatest(AuthTypes.AUTH, auth);
}

export function* auth({ payload }) {
  try {
    const response = yield fetch(AUTH, {
      method: POST,
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: payload,
        redirect_uri: redirect_url,
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientID + ":" + clientSecret),
      },
    });

    const data = yield response.json();

    ls.set("@APP/authToken", data.access_token);
    ls.set("@APP/expires_in", data.expires_in);

    yield put(AuthActions.authSuccess(data));

    history.push({
      pathname: "/",
      search: "",
    });
  } catch (error) {
    yield put(AuthActions.authFailure(error));
  }
}
