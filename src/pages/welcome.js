/**
 * IMPORTS
 */
import React from 'react';
import {useEffect} from 'react';


/**
 * STYLES
 */
import './styles/welcome.css'
import spotifood from '../assets/spotifood_name.png';


/**
 * CODE
 */
function Welcome () {
    // function to handle click on login button
    function handleClick(event) {
        event.preventDefault();
        
        // redirect to spotify login page
        window.open('https://accounts.spotify.com/authorize?client_id=708980b1d1d646ab98321c40bb7286e9&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A3000',
                    '_self');
    }
    
    // execute when component is mounted
    useEffect(() => {
        // get token, token_type and expires_in from url
        const searchParams = new URLSearchParams(window.location.hash.substring(1));
        const token = searchParams.get('access_token');
        const tokenType = searchParams.get('token_type');
        const expires = searchParams.get('expires_in');
        
        // access token exists: save data on browser local storage and redirect
        if (token !== null) {
            localStorage.setItem('access_token', token);
            localStorage.setItem('token_type', tokenType);
            localStorage.setItem('expires_in', expires);
            
            // redirect to home page
            window.history.pushState({urlPath: '/authorized' }, '', '/authorized');
            window.location.reload();
        }
    }, []);

    return (
        <div>            
            <img alt="logo" src={spotifood}></img>
            <p>Bem vindo ao Spotifood! Para continuar por favor entre com uma conta Spotify</p>
            <button className="login" onClick={handleClick}>ENTRAR</button>
        </div>
    )
}

/**
 * EXPORTS
 */
export {Welcome};
