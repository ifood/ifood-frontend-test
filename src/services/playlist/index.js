import axios from 'axios';

const headers = {
    'Authorization': 'Bearer BQDeSxIrB8kPKfC_Tyg5Mqe_ZeRsVKyyPwYROKubJhKkNo0TxNL1ej5wBkn8nf6LUfH-bAngIxSfKYvZzK9OQ2XPNJZJp2t2FjQytXkm2Wrkjdh6w6Rpj_dYUMEDb0SJgmQXylqTa7X1EBub4lVnk0FrX9nb6B4hCTTsYg7hma0iPbWB08Dt9UQAixwgREt0b9MuNXSIhkA'
};

const getPlaylist = async () => (
    (await axios.get(
        'https://api.spotify.com/v1/browse/featured-playlists', { headers: headers }
    )).data
);
  
export{
    getPlaylist
} 