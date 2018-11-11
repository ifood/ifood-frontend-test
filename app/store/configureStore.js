import createSagaMiddleware from 'redux-saga';
import { compose, createStore as createReduxStore, applyMiddleware } from 'redux';
import memoizee from 'memoizee';
import createReducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

function runSaga(saga) {
  sagaMiddleware.run(saga);
}

const memoized = memoizee(runSaga);

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
  store.runSaga = (saga) => {
    memoized(saga);
  };

  // global sagas
  store.runSaga(UserAuthSagas);

  // global subscribers, updates localStorage
  subscribeStore(store);

  // for lazy/splitted reducers
  store.registerReducer = (name, reducer) => {
    if (typeof name !== 'string') {
      throw new TypeError('"name" is required and must be a string.');
    }

    if (typeof reducer !== 'function') {
      throw new TypeError('"reducer" is required and must be a reducer function.');
    }

    if (Object.prototype.hasOwnProperty.call(lazyReducers, name)) {
      return store;
    }

    lazyReducers[name] = reducer;

    store.replaceReducer(createReducers(lazyReducers));

    return store;
  };

  return store;
}
