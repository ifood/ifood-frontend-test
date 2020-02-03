import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SPOTIFY_CLIENT_ID } from '../constants';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(5),
  },
  h4: {
    marginTop: theme.spacing(2),
  },
  h2: {
    fontWeight: '500',
  },
}));

export default function Login() {
  const classes = useStyles();
  return (
    <Container component="main">
      <Typography variant="h2" className={classes.h2}>
        SPOTIFOOD
      </Typography>
      <Typography variant="h4" className={classes.h4}>
        Best playlists to enjoy your food
      </Typography>
      <Button
        href={`https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=http://localhost:3000&response_type=token`}
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
      >
        Login com Spotify
      </Button>
    </Container>
  );
}
