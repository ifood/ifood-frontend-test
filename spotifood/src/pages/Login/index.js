import React from 'react';
import { useHistory } from 'react-router-dom';

import SpotifyWebApi from 'spotify-web-api-node';

import './styles.scss';

import logoImg from '../../assets/img/logo.png';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {

    const getHashParams = () => {
        let hashParams = {};
        let e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            e = r.exec(q);
        }
        return hashParams;
    };

    const spotifyApi = new SpotifyWebApi();
    const params = getHashParams();
    const token = params.access_token;
    const history = useHistory();

    if (token) {
        spotifyApi.setAccessToken(token);
        localStorage.setItem('spotify_token', token);
    }
    
    const getTokenLocal = localStorage.getItem('spotify_token');
    if (getTokenLocal) {
        history.push('/profile');
    }

    return (
        <div className="logon">
            <div className="logon-container">
                <section className="text-center">
                    <img src={logoImg} alt="Spotifood"/>
                    <a href='https://next-spotifood.herokuapp.com/login' className="button" > Login Spotify </a>
                </section>
                
                <img src={heroesImg} alt="Heroes" />
            </div>
        </div>    
    );
}