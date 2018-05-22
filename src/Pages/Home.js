import React from 'react';
import { spotifyAuthorizeUrl } from '../constants/spotify';

const Home = () => ((
  <React.Fragment>
    <p>Login in your Spotify account to see the featured playlists we have prepared for you.</p>
    <a href={spotifyAuthorizeUrl}>Authorize</a>
  </React.Fragment>
));

export default Home;
