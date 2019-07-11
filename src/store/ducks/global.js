import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getSpotifyFiltersRequest: [''],
  getSpotifyFiltersResponse: ['data'],
  getSpotifyPlaylistsRequest: ['debounce'],
  getSpotifyPlaylistsResponse: ['data'],
  setAppliedFilterChange: ['name', 'value'],
  handleCloseSnack: [],
  setResponseTotals: ['value'],
});

const INITIAL_STATE = {
  filtersOptions: {},
  playlists: [],
  appliedFilters: {
    locale: '',
    country: '',
    name: '',
    limit: 10,
    offset: 0,
    timestamp: '',
  },
  responseTotals: null,
  serverTotals: 0,
  showSnack: '',
  title: '',
  loadingResuls: false,
};

const getSpotifyFiltersResponse = (state = INITIAL_STATE, action) => {
  if (!action.data || action.data.length === 0) {
    return {
      ...state,
      showSnack: 'Ocorreu um erro ao carregar os filtros. Por favor, tente novamente mais tarde.',
    };
  }

  const response = action.data.data.filters;
  const filtersOptions = {};

  for (let i = 0; i < response.length; i += 1) {
    const element = response[i];
    filtersOptions[element.id] = element;
  }

  return { ...state, filtersOptions };
};

const getSpotifyPlaylistsRequest = (state = INITIAL_STATE) => {
  return { ...state, loadingResults: true };
};

const getSpotifyPlaylistsResponse = (state = INITIAL_STATE, action) => {
  if (action.data.response && action.data.response.status === 401) {
    window.location.href = '/';
    return { ...state, loadingResults: false };
  }

  if (action.data.response && action.data.response.status === 400) {
    return {
      ...state,
      showSnack: 'Ocorreu um erro ao listar as playlists. Por favor, tente novamente mais tarde.',
      loadingResults: false,
      playlists: [],
    };
  }

  return {
    ...state,
    playlists: action.data.data.playlists.items,
    responseTotals:
      state.appliedFilters.name.length === 0
        ? action.data.data.playlists.total
        : state.responseTotals,
    title: action.data.data.message,
    loadingResults: false,
    serverTotals: action.data.data.playlists.total,
  };
};

const setAppliedFilterChange = (state = INITIAL_STATE, action) => {
  const { name, value } = action;
  const appliedFilters = Object.assign({}, state.appliedFilters);
  appliedFilters[name] = value;

  return { ...state, appliedFilters };
};

const handleCloseSnack = (state = INITIAL_STATE) => {
  return { ...state, showSnack: '' };
};

const setResponseTotals = (state = INITIAL_STATE, action) => {
  return { ...state, responseTotals: action.value };
};

export default createReducer(INITIAL_STATE, {
  [Types.GET_SPOTIFY_FILTERS_RESPONSE]: getSpotifyFiltersResponse,
  [Types.GET_SPOTIFY_PLAYLISTS_REQUEST]: getSpotifyPlaylistsRequest,
  [Types.GET_SPOTIFY_PLAYLISTS_RESPONSE]: getSpotifyPlaylistsResponse,
  [Types.SET_APPLIED_FILTER_CHANGE]: setAppliedFilterChange,
  [Types.HANDLE_CLOSE_SNACK]: handleCloseSnack,
  [Types.SET_RESPONSE_TOTALS]: setResponseTotals,
});
