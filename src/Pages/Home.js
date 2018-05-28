import React from 'react';
import Typography from '@material-ui/core/Typography';
import { SPOTIFY_AUTHORIZE_URL } from '../constants/spotify';


const Home = () => ((
  <div className="container">
    <Typography variant="headline" gutterBottom>
      Login in your Spotify account to see the featured playlists we have prepared for you.
    </Typography>

    <a className="auth-link" href={SPOTIFY_AUTHORIZE_URL}>Authorize</a>
  </div>
));

export default Home;
