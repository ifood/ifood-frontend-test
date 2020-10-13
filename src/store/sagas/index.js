import { all } from "redux-saga/effects";

import * as auth from "./auth";
import * as playlists from "./playlists";
import * as user from "./user";

function* Sagas() {
  yield all([auth.watchSagas(), playlists.watchSagas(), user.watchSagas()]);
}

export default Sagas;
