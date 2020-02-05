import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SPOTIFY_CLIENT_ID, REDIRECT_URL } from '../constants';

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
  main: {
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

  },
}));

export default function Login() {
  const classes = useStyles();
  return (
    <Container component="main" className={classes.main}>
      <Typography variant="h2" className={classes.h2}>
        SPOTIFOOD
      </Typography>
      <Typography variant="h4" className={classes.h4}>
        Top playlists para aproveitar sua comida!
      </Typography>
      <Button
        href={`https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URL}`}
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
