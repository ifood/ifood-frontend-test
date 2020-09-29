import Axios from 'axios';
import { toast } from 'react-toastify';
import { removeAccessToken } from '../utils/acessToken';

export const getFilters = async () => {
    const { data } = await Axios.get('https://www.mocky.io/v2/5a25fade2e0000213aa90776');

    return data.filters;
};

const _handleFeaturedPlaylistsError = ({ response }) => {
    if (response.status === 401) {
        removeAccessToken();
    }
    toast.error(`[${response.status}] - ${response.data.error.message}`);
};

export const getFeaturedPlaylists = async (params = {}) => {
    const accessToken = localStorage.getItem('accessToken');

    try {
        const { data } = await Axios.get('https://api.spotify.com/v1/browse/featured-playlists',
            {
                params,
                headers: { Authorization: `Bearer ${accessToken}` },
            });

        return data.playlists.items;
    } catch (error) {
        _handleFeaturedPlaylistsError(error);
        return [];
    }
};
