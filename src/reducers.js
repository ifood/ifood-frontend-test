import { combineReducers } from 'redux';

import playlistsReducer from './containers/Playlists/Playlists.reducers';

export default combineReducers({
  playlistsContainer: playlistsReducer,
});
