import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 64,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    backgroundColor: '#EA1E2C'
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  },
}));

export const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} >
        <Toolbar >
          <Typography variant="h6" className={classes.title}>
              Spotifood
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
