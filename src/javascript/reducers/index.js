import { combineReducers } from "redux";

import filters from "./filters";
import spotify from "./spotify";

export default combineReducers({
  filters,
  spotify,
});
