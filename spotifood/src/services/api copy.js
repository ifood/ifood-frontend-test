import SpotifyWebApi from 'spotify-web-api-node';

const api = () => {

    const spotifyApi = new SpotifyWebApi();

    const params = this.getHashParams();

    const token = params.access_token;

    if (token) {
        spotifyApi.setAccessToken(token);
        console.log(`Seu token é: ${token}`);
        return token;
    }
    else {
        console.error('Você não tem token');
    }

    /**
    * Obtains parameters from the hash of the URL
    * @return Object
    */
    const getHashParams = () => {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            e = r.exec(q);
        }
        return hashParams;
    };

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

}

export default api;
