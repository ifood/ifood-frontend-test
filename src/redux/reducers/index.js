import { combineReducers } from 'redux'
import { filterReducer } from './filter'
import { playlistReducer } from './playlist'

export const Reducers = combineReducers({
  filterReducer,
  playlistReducer
})
