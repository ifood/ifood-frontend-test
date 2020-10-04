import { combineReducers } from "redux";

import playlists from "./playlists/reducers";
import authentication from "./auth/reducers";

export default combineReducers({ playlists, authentication });
