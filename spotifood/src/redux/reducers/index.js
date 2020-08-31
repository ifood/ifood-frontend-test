import { combineReducers } from 'redux';
import playlist from './playlists.reducer';

const appReducer = combineReducers({
    playlist,
});

export default appReducer;