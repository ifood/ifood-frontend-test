import React from 'react';
import { useHistory } from 'react-router-dom';

import { Login } from '../Login/Login';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  const gotToHome = () => {
      history.push('/playlists')
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} onClick={gotToHome}>
            Spotifood
          </Typography>
          <Login />
        </Toolbar>
      </AppBar>
    </div>
  );
}