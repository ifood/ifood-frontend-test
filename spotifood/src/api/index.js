const axios = require('axios').default;

const config = {
    headers: {
        'Authorization': 'Bearer BQBH2rSRjNvy8mKXQLU0eHl-vNncYTyU1ngsdy5qAxoaLHEa2hdB84iDzcpK3vk_mVGj0td6ASMhK1b7-B9zDE-rAs9WSlRn6sixccM0LJNzt6yvV47vlxEjimaUpHD3KLbWPWGoSsdGdJdELiBKZrAKXqj_MXV6',
    },
};

const baseUrl = 'https://api.spotify.com/v1/browse/featured-playlists';

module.exports = {
    async getPlaylists(filters = []) {
        try {
            const data = await axios.get(
                `${baseUrl}?country=BR&limit=5`,
                config,
            );

            return data;
        } catch (error) {
            alert(error);
        }
    }
};