import { combineReducers } from 'redux'
import { filterReducer } from './FilterReducer'
import { playlistReducer } from './PlaylistReducer'

export default combineReducers({
  filter: filterReducer,
  playlist: playlistReducer,
})
