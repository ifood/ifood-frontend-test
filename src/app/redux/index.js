import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { i18nReducer } from 'react-redux-i18n';
import thunk from 'redux-thunk';

import authReducer from './reducers/auth';
import playlistReducer from './reducers/playlist';
import loadingReducer from './reducers/loading';

export default () => {
  const store = createStore(
    combineReducers(
      {
        i18n: i18nReducer,
        auth: authReducer,
        playlist: playlistReducer,
        loading: loadingReducer,
      },
    ),
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    ),
  );

  return store;
};
