// Global
const axios = require('axios').default;
const request = require('request');

const baseUrl = 'https://api.spotify.com/v1/browse/featured-playlists';
const client_id = '22cf0dca328b464fbdf9dcf64a184947';
const client_secret = '1820ff26fe8149838b312b73334f18f0';

const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) 
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true,
}

const mountQueryString = params => {
    if (params) {
        let queryString = '';
        Object.keys(params).forEach(p => {
            if (params[p]) {
                queryString += `${!queryString.length ? '?' : '&'}${p}=${params[p]}`;
            }
        });
        return queryString;
    } else {
        return '';
    }
};


module.exports = {
    /**
     * get playlists with filters
     * @param {Array} filters 
     * @returns {Object} data
    */
    async getPlaylists(filters = {}) {
        return await new Promise((resolve, reject) => {
            request.post(authOptions, function(error, response, body) {
                if (error) {
                    reject(error);
                } else {
                    resolve({ response, body });
                }
            });
        }).then(data => {
            const { response, body } = data;
            if (response.statusCode === 200) {
                // use the access token to access the Spotify Web API
                const token = body.access_token;
                const options = {
                    url: `${baseUrl}${mountQueryString(filters)}`,
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
                return new Promise((resolve, reject) => {
                    request.get(options, function(error, response, body) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(body);
                        }
                    });
                });
            }
        }).catch(err => {
            alert(err);
        })
    },
    /**
     * get filters list in mocky.io
     * @returns {Array} filters
     */
    async getFilters() {
        const response = await axios.get('http://www.mocky.io/v2/5a25fade2e0000213aa90776');
        
        return response.data;
    }
};