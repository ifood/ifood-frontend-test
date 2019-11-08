import { combineReducers } from 'redux'

/* */

import { CartReducer } from './Cart'

/* */

export const Reducers = combineReducers({

     cart: CartReducer

})
