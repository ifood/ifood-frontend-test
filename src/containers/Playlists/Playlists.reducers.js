import { combineReducers } from 'redux';
import { PLAYLISTS, FILTERS_METADATA } from './Playlists.actions';

export const playlistsData = (state = {}, action) => {
  switch (action.type) {
    case PLAYLISTS.REQUEST:
      return Object.assign({}, { ...state, loading: true });
    case PLAYLISTS.SUCCESS:
      return Object.assign({}, { ...state, loading: false, data: action.data });
    case PLAYLISTS.FAILURE:
      return Object.assign({}, {
        ...state,
        loading: false,
        error: action.error,
        data: [],
      });
    default:
      break;
  }

  return state;
};

export const filtersMetadata = (state = {}, action) => {
  switch (action.type) {
    case FILTERS_METADATA.REQUEST:
      return Object.assign({}, { ...state, loading: true });
    case FILTERS_METADATA.SUCCESS:
      return Object.assign({}, { ...state, loading: false, metadata: action.metadata });
    case FILTERS_METADATA.FAILURE:
      return Object.assign({}, { ...state, loading: false, error: action.error });
    default:
      break;
  }

  return state;
};

export default combineReducers({
  playlists: playlistsData,
  filters: filtersMetadata,
});
