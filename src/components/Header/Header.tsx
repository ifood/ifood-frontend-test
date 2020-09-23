import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useAuth } from '../../hooks/useAuth';
import { useStyles } from './Header.jss';

export const Header: React.FC = () => {
  const classes = useStyles();
  const { logout } = useAuth();
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <Typography className={classes.title} variant="h2">
          Spotifood
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};
