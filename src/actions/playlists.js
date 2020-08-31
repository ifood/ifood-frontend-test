import { playlistActionTypes } from './actionTypes';
import getToken from '../helpers/getToken'
import axios from 'axios'


const hash = window.location.hash
const url = 'https://api.spotify.com/v1/browse/featured-playlists'
const { access_token } = getToken(hash)

export const fetchPlaylists = (filterParams) => dispatch => {
  axios.get(url, {
    headers: {
      'Authorization': `Bearer ${access_token}`
    },
    params: filterParams
  })
    .then(playlists =>
      dispatch({
        type: playlistActionTypes.FETCH_PLAYLISTS_SUCCESS,
        payload: playlists.data.playlists.items
      })
    ).catch(error => {
      dispatch({
        type: playlistActionTypes.FETCH_PLAYLISTS_ERROR,
        payload: error
      })
    });
};
