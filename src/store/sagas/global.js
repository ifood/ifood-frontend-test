import { call, put, select } from 'redux-saga/effects';

import axiosInstance from 'services';
import { Creators as GlobalActions } from '../ducks/global';

const getFilters = state => state.global.appliedFilters;
const delay = ms => new Promise(res => setTimeout(res, ms));

export function* getSpotifyFilters() {
  try {
    const response = yield call(axiosInstance.get, 'http://www.mocky.io/v2/5a25fade2e0000213aa90776');

    yield put(GlobalActions.getSpotifyFiltersResponse(response));
  } catch (error) {
    yield put(GlobalActions.getSpotifyFiltersResponse(null));
  }
}

export function* getSpotifyPlaylists(action) {
  try {
    if (action.debounce) {
      yield delay(action.debounce);
    }

    const tokenObject = JSON.parse(localStorage.getItem('spotifyToken'));
    const filters = yield select(getFilters);
    let url = 'https://api.spotify.com/v1/browse/featured-playlists?';

    if (filters && filters.limit) {
      url += `&limit=${filters.limit}`;
    }

    if (filters && Number.isInteger(filters.offset)) {
      url += `&offset=${filters.offset}`;
    }

    if (filters && filters.country) {
      url += `&country=${filters.country}`;
    }

    if (filters && filters.locale) {
      url += `&locale=${filters.locale}`;
    }

    if (filters && filters.timestamp) {
      url += `&timestamp=${filters.timestamp}:00`;
    }

    const response = yield call(axiosInstance.get, url, {
      headers: {
        Authorization: `Bearer ${tokenObject.token}`,
      },
    });

    yield put(GlobalActions.getSpotifyPlaylistsResponse(response));
  } catch (error) {
    yield put(GlobalActions.getSpotifyPlaylistsResponse(error));
  }
}
