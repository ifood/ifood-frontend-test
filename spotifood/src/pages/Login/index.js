/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
    clientId: 'e1afb94832e040fc92da92c758be3f0b',
    clientSecret: '0b1517de3df144948de459e3ad818c13',
    redirectUri: 'http://localhost:8888/callback'
});

class App extends  Component {
    constructor(){
        super();
        const params = this.getHashParams();
        const token = params.access_token;
        if (token) {
          spotifyApi.setAccessToken(token);
          console.log(token);
        }
        this.state = {
          loggedIn: token ? true : false,
          nowPlaying: { name: 'Not Checked', albumArt: '' }
        }
    }
    /**
     * Obtains parameters from the hash of the URL
     * @return Object
     */
    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
           e = r.exec(q);
        }
        return hashParams;
    }
    getNowPlaying(){
        // Get Elvis' albums
        spotifyApi.getFeaturedPlaylists({ limit : 3, offset: 1, country: 'SE', locale: 'sv_SE', timestamp:'2014-10-23T09:00:00' }).then(
            function(data) {
                console.log('Artist albums', data.body);
            },
            function(err) {
                console.error(err);
            }
        );
    }
    render() {
        return (
            <div className="App">
            <a href='http://localhost:8888' > Login to Spotify </a>
            <div>
                Now Playing: { this.state.nowPlaying.name }
            </div>
            <div>
                <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }} alt="description of image" />
            </div>
            { this.state.loggedIn &&
                <button onClick={() => this.getNowPlaying()}>
                Check Now Playing
                </button>
            }
            </div>
        );
    }    
}

export default App;
