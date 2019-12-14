import { combineReducers } from 'redux'
import playlists from './ducks/playlists'
import formFields from './ducks/form-fields'

const reducers = combineReducers({
  playlists,
  formFields
})

export default reducers
