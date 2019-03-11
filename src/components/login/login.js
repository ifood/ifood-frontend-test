import React, { Component } from 'react';
import constantes from '../../constantes';


class LoginSpotify extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id="login">
                    <h1>Primeiro faça o login no Spotify</h1>
                    <a href={constantes.SPOTIFY_URL_AUTHORIZE}>Log in</a>
                </div>
            </div>
        )
      }
}
export default LoginSpotify;