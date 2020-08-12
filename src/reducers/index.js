/**
 * IMPORTS
 */
import {combineReducers} from 'redux';
import {filterReducer as filters} from './filterreducer.js';
import {searchReducer as search} from './searchreducer.js';


/**
 * CODE
 */
const reducers = combineReducers({
    filters,
    search
});


/**
 * EXPORTS
 */
export {reducers};
