import update from 'immutability-helper'

/* */

import { ADD_TO_CART } from 'state/actions/types'

/* */

export const CartReducer = (state = [], action) => {

    switch(action.type){

        case ADD_TO_CART :

            let exists = state.findIndex(({ id }) => id === action.data.id)

            if(exists > -1){

                return update(state, {

                    $splice : [

                        [exists, 1]

                    ]

                })

            } else {

                return update(state, {

                    $push : [action.data]

                })

            }

        break

        default :

            return state

    }

}
