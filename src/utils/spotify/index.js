import {

    SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET

} from './config'
import axios from 'axios'

/* */

export const spotifyRequestAcessToken = () => {

    let clientEncoded = btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`)

    /* */

    axios.post('https://accounts.spotify.com/api/token', {

        grant_type : 'client_credentials'

    }, {

        headers : {

            'Authorization' : `Basic ${clientEncoded}`

        }

    }).then(response => {

        console.log(response)

    }).catch(error => {

        console.log(error)

    })

}
