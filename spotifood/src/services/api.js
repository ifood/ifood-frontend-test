import SpotifyWebApi from 'spotify-web-api-node';

const api = (token, func) => {

    const spotifyApi = new SpotifyWebApi();

    if (token) {
        spotifyApi.setAccessToken(token);

        // You can pass as parameter another function of the api
        // https://github.com/thelinmichael/spotify-web-api-node
        switch (func) {
            case 'getNowPlaying' :
                const getNowPlaying = () => {
                    spotifyApi.getFeaturedPlaylists({ limit : 3, offset: 1, country: 'SE', locale: 'sv_SE', timestamp:'2014-10-23T09:00:00' }).then(
                        function(data) {
                            console.log('Artist albums', data.body);
                            return data.body;
                        },
                        function(err) {
                            console.error(err);
                        }
                    );
                }
                getNowPlaying();
                break;
            default:
                return 204;
        }
    }
    else {
        return 401;
    }

}

export default api;
