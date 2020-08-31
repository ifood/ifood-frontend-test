import { combineReducers } from 'redux';
import playlistsReducer from './playlists';
import playlistsFilterReducer from './playlistsFilters'

export default combineReducers({
  playlists: playlistsReducer,
  playlistsFilters: playlistsFilterReducer
});
