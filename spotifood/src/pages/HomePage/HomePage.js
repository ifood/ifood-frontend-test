import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import useProtectedRoute from '../../hooks/useProtectedRoute';

import { Login } from '../../components/Login/Login';
import illustration from '../../images/home-illustration.svg'

import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  image: {
    display: 'block',
    maxWidth: 360,
    margin: '16px auto'
  },
  introText: {
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 24,
  }
});

const HomePage = () => {
    const classes = useStyles();
    const history = useHistory();
    const token = useProtectedRoute();

    useEffect(() => {
      if(token !== null) {
        history.push("/playlists");
      } 
    })

    return (
      <Container maxWidth="sm">
        <Box className={classes.image}>
          <img src={illustration} />
        </Box>
        <Typography color="primary" variant="h2" component="h2" className={classes.introText}>
          Bem-vinda(o) ao Spotifood.
        </Typography>
        <Login />
      </Container>
    )
}

export default HomePage;