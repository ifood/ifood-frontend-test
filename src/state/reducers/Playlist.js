// import update from 'immutability-helper'

/* */

import { ADD_PLAYLIST_ITEMS } from 'state/actions/types'

/* */

export const PlaylistReducer = (state = [], action) => {

    switch(action.type){

        case ADD_PLAYLIST_ITEMS :

            state = action.data

            return state

        break

        default : return state

    }

}
