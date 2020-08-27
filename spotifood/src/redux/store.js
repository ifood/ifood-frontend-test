import { createStore } from 'redux';
import playlist from './reducers/playlists.reducer';
// import reducers from './reducers';

const store = createStore(
    playlist,
);

export default store;