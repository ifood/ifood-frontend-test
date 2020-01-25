import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

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

            <figure className={ styles.Cover }>

                <img className={ styles.CoverImg } src={ this.props.data.img } alt={ `Imagem de capa ${(this.props.data.type === 'album' ? 'do álbum' : 'da playlist')} "${this.props.data.title}" de ${this.props.data.owner}` } />

                <div className={ styles.CoverOverlay }>

                    <a className={

                        [

                            styles.CoverOverlayPlay,
                            this.props.small && styles.CoverOverlayPlaySmall

                        ].filter(Boolean).join(' ')

                    }

                    href={ this.props.data.type === 'category' ? `https://open.spotify.com/genre/${this.props.data.id}` : this.props.data.uri } target="_blank" rel="noopener noreferrer"

                    title={ `Tocar ${(this.props.data.type === 'album' ? 'álbum' : 'playlist')} "${this.props.data.title}" de ${this.props.data.owner}` }

                    >

                        <Icon className={ styles.CoverOverlayPlayIcon } glyph="play_arrow" />

                    </a>

                </div>

            </figure>

        )

    }

}

export default Cover
