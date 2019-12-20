import { combineReducers } from 'redux'
import playlists from './playlists'
import filters from './form-filters'

const reducers = combineReducers({
  playlists,
  filters
})

export default reducers
