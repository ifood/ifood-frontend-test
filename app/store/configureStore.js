import createSagaMiddleware from 'redux-saga';
import { compose, createStore as createReduxStore, applyMiddleware } from 'redux';
import memoizee from 'memoizee';
import createReducers from './reducers';
import subscribeStore from './subscribeStore';
import { loadFromLocalStorage } from './localStorage';

const sagaMiddleware = createSagaMiddleware();

// we need to memoize saga to prevent duplicated entries
function runSaga(saga) {
  sagaMiddleware.run(saga);
}

const sageMemoized = memoizee(runSaga);

// we need to memoize reducers to prevent duplicated entries
function registerReducer(name, reducer, store, lazyReducers) {
  if (typeof name !== 'string') {
    throw new TypeError('"name" is required and must be a string.');
  }

  if (typeof reducer !== 'function') {
    throw new TypeError('"reducer" is required and must be a reducer function.');
  }

  if (store === undefined || store === null) {
    throw new TypeError('"store" is required and must not be null or undefined');
  }

  lazyReducers[name] = reducer;

  store.replaceReducer(createReducers(lazyReducers));

  return store;
}

const reduxMemoized = memoizee(registerReducer);

// redux debug
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const lazyReducers = {};
  // gets persisted values from localStorage
  const preloadedState = loadFromLocalStorage();
  const store = createReduxStore(
    createReducers(),
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  // allow splitted sagas to run from other parts of the app besides here
  store.runSaga = (saga) => sageMemoized(saga);

  // global sagas
  // store.runSaga(SomeSaga);

  // global subscribers, updates localStorage
  subscribeStore(store);

  // for lazy/splitted reducers
  store.registerReducer = (name, reducer) =>
    reduxMemoized(name, reducer, store, lazyReducers);

  return store;
}
