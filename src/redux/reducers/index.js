import { combineReducers } from 'redux';

import { filterReducer } from './filters';


export const Reducers = combineReducers({
  filters: filterReducer,
});
