export const LOAD_FILTERS = '@featuredPlaylists/LOAD_FILTERS';
export const LOAD_SPOTIFY_PLAYLISTS = '@featuredPlaylists/LOAD_SPOTIFY_PLAYLISTS';
export const SET_FILTER_VALUE = '@featuredPlaylists/SET_FILTER_VALUE';
export const RESET_FILTERS = '@featuredPlaylists/RESET_FILTERS';
export const RESET = '@featuredPlaylists/RESET';
export const FEATURED_PLAYLISTS_REDUX_NAME = 'featuredPlaylists';

const INITIAL_STATE = {
  filters: [],
  playlists: [],
  selectedFilters: {},
};

// Selectors
export function getFeaturedPlaylistsStore(state) {
  return state[FEATURED_PLAYLISTS_REDUX_NAME];
}

/* Action Handlers */
export const fetchFilters = () => async (dispatch, getState, services) => {
  try {
    if (!getState().featuredPlaylists.filters.length) {
      const filters = await services.spotify.fetchFilters();
      dispatch({ type: LOAD_FILTERS, filters });
    }
  } catch (err) {
    // TODO: create a notification reducer
    // console.log('SpotifyFood Error: Spotify Filters: ', err);
  }
};

export const fetchPlaylists = () => async (dispatch, getState, services) => {
  try {
    const { accessToken } = getState().authentication;
    const { selectedFilters } = getState().featuredPlaylists;

    const playlists = await services.spotify.fetchPlaylists(accessToken, selectedFilters);
    dispatch({ type: LOAD_SPOTIFY_PLAYLISTS, playlists: playlists.items });
  } catch (err) {
    dispatch({ type: LOAD_SPOTIFY_PLAYLISTS, playlists: [] });
  }
};

export const setFilterValue = (filterName, filterValue) => async (dispatch) => {
  dispatch({ type: SET_FILTER_VALUE, filterName, filterValue });
};

export const resetFilters = () => async (dispatch) => {
  dispatch({ type: RESET_FILTERS });
};

/* REDUCER */
function featuredPlaylistsReducer(state = INITIAL_STATE, action) {
  let newState = { ...state };

  switch (action.type) {
    case LOAD_FILTERS: {
      newState = {
        ...state,
        filters: action.filters,
      };
      break;
    }
    case LOAD_SPOTIFY_PLAYLISTS: {
      newState = {
        ...state,
        playlists: action.playlists,
      };
      break;
    }
    case SET_FILTER_VALUE: {
      const { filterName, filterValue } = action;

      const newSelectedFilters = {
        ...state.selectedFilters,
      };

      if (filterValue) {
        newSelectedFilters[filterName] = filterValue;
      } else {
        delete newSelectedFilters[filterName];
      }

      newState = { ...state, selectedFilters: newSelectedFilters };
      break;
    }
    case RESET_FILTERS: {
      newState = {
        ...state,
        selectedFilters: {},
      };
      break;
    }
    case RESET: {
      newState = INITIAL_STATE;
      break;
    }
    default:
      break;
  }

  return newState;
}

export default featuredPlaylistsReducer;
