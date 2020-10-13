import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import auth from "./auth";
import playlists from "./playlists";
import user from "./user";
import filter from "./filter";

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    playlists,
    user,
    filter,
  });

const Reducers = (history) => appReducer(history);

export default Reducers;
