import { combineReducers } from 'redux';
import globalReducers from './globalReducers';

export default function createReducers(lazyReducers = {}) {
  return combineReducers({ ...globalReducers, ...lazyReducers });
}
