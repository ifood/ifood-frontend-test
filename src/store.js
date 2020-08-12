/**
 * IMPORTS
 */
import {createStore} from 'redux';
import {reducers} from './reducers/index.js';

/**
 * CODE
 */
const store = createStore(reducers);


/**
 * EXPORTS
 */
export {store};
