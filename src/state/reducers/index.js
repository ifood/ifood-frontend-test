import { combineReducers } from 'redux'

/* */

import { PlaylistReducer } from './Playlist'
import { AuthReducer } from './Auth'

/* */

export const Reducers = combineReducers({

    auth : AuthReducer,
    playlistItems : PlaylistReducer

})
