import React, { Component } from "react";
import { SPOTIFY_AUTHORIZE } from "../constants/urls";
import { parseHash } from "../utils/index.js";
import PropTypes from "prop-types";

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.clearExpiredToken = this.clearExpiredToken.bind(this);
    }

    componentDidMount() {
        const { accessToken } = this.props;
        const hash = parseHash(window.location.hash);
        const token = hash.access_token;
        const expiration = hash.expires_in;

        if (!accessToken && token) {
            this.props.setAccessToken(token);
        }

        if (expiration) {
            setTimeout(this.clearExpiredToken, expiration);
        }
    }

    clearExpiredToken() {
        this.props.setAccessToken(null);
    }

    getLoginURL() {
        const client_id = "91a84a82e4e34192a860659488ce3ecf"
        const redirect_uri = process.env.REACT_APP_REDIRECT_URL;
        const url = `${SPOTIFY_AUTHORIZE}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token&show_dialog=true`;

        return url;
    }

    render() {
        const { accessToken } = this.props;

        return !accessToken && (
            <div className="login-container">
                <span className="login-request">Please log in using your Spotify account to be able to see the playlists </span>
                <a href={this.getLoginURL()} className="button">Login</a>
            </div>
        )
    }
}

Login.propType = {
    getLoginUrl: PropTypes.func.isRequired,
}
