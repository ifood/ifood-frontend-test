import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useAuth } from '../../hooks/useAuth';
import { useStyles } from './Login.jss';

export const Login: React.FC = () => {
  const classes = useStyles();
  const { login } = useAuth();
  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h2">
        Spotifood
      </Typography>
      <Button color="primary" variant="contained" onClick={login} disableElevation>
        Login
      </Button>
    </div>
  );
};
