import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import throttle from 'lodash.throttle';
import { saveState, loadState } from './utils/localStorage';
import services from '../services';

/* Global Reducers */
import authentication from './authentication';

/* Page Reducers */
import featuredPlaylists, { FEATURED_PLAYLISTS_REDUX_NAME } from '../pages/FeaturedPlaylists/module';


/* enhancers */
const middlwares = [thunk.withExtraArgument(services)];

/* combine reducers */
const allReducers = combineReducers({
  authentication,
  [FEATURED_PLAYLISTS_REDUX_NAME]: featuredPlaylists,
});

const persistedState = loadState();

/* create store */
const store = createStore(
  allReducers,
  persistedState,
  composeWithDevTools(applyMiddleware(...middlwares)),
);

/* Persist store to local storage */
store.subscribe(
  throttle(() => {
    saveState({
      authentication: store.getState().authentication,
      [FEATURED_PLAYLISTS_REDUX_NAME]: store.getState()[FEATURED_PLAYLISTS_REDUX_NAME],
    });
  }, 1000),
);

export default store;
