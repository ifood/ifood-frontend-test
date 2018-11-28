import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import auth from './auth';
import filter from './filter';

import { IAuthState } from './auth/reducers';
import { IFilterState } from './filter/reducers';

const reducers = {
  auth,
  filter,
};

export interface IStoreState {
  auth: IAuthState;
  filter: IFilterState;
}

// a little hack to make the redux devtools work with typescript
// we make window as any so ts can accept non-default property __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// source: https://stackoverflow.com/posts/50721364
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
