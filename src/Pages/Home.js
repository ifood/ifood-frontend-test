import React from 'react';
import { SPOTIFY_AUTHORIZE_URL } from '../constants/spotify';

const Home = () => ((
  <React.Fragment>
    <p>Login in your Spotify account to see the featured playlists we have prepared for you.</p>
    <a href={SPOTIFY_AUTHORIZE_URL}>Authorize</a>
  </React.Fragment>
));

export default Home;
