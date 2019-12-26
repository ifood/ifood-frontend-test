import React from 'react'
// import axios from 'axios'

/* */

import Icon from 'components/Icon/Icon'

/* */

import styles from './Cover.module.scss'

/* */

// const play = ({
//   spotify_uri,
//   playerInstance: {
//     _options: {
//       getOAuthToken,
//       id
//     }
//   }
// }) => {
//   getOAuthToken(access_token => {
//
//     fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
//       method: 'PUT',
//       body: JSON.stringify({ uris: [spotify_uri] }),
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${access_token}`
//       },
//     });
//
//   });
// };

class Cover extends React.Component {

    // play(uri){
    //
    //     if(window.Spotify){
    //
    //         play({
    //
    //             playerInstance: window.Spotify.Player({ name: 'Teste' }),
    //             spotify_uri: uri
    //
    //         })
    //
    //     }
    //
    // }

    render(){

        return (

            <div className={ styles.Cover } style={{

                backgroundImage: `url(${ this.props.url })`

            }}>

                <div className={ styles.CoverOverlay }>

                    <a className={

                        [

                            styles.CoverOverlayPlay,
                            this.props.small && styles.CoverOverlayPlaySmall

                        ].filter(Boolean).join(' ')

                    } href={ this.props.uri } target="_blank" rel="noopener noreferrer">

                        <Icon className={ styles.CoverOverlayPlayIcon } glyph="play_arrow" />

                    </a>

                </div>

            </div>

        )

    }

}

export default Cover
