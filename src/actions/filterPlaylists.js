import { playlisFilterActionTypes } from './actionTypes';
import axios from 'axios'


const url = 'http://www.mocky.io/v2/5a25fade2e0000213aa90776'

export const fetchPlaylistsFilters = () => dispatch => {
  axios.get(url)
    .then(data =>
      dispatch({
        type: playlisFilterActionTypes.FETCH_PLAYLISTS_FILTER_SUCCESS,
        payload: data
      })
    ).catch(error => {
        console.log('Byanze mfash', error)
      dispatch({
        type: playlisFilterActionTypes.FETCH_PLAYLISTS_FILTER_ERROR,
        payload: error
      })
    });
};
