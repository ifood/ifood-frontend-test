import React from 'react'
import dotenv from 'dotenv'

dotenv.config()

const clientId = process.env.REACT_APP_ClientID
const redirectUrl = 'http%3A%2F%2Flocalhost%3A3006%2Fplaylists'

const Button = () => {
    return (
        <a href={`https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=token&show_dialog=true`}>
            <button className="header__login-btn">Login with Spotify</button>
        </a>
    )
}

export default Button
