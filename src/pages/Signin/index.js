import React, { useEffect } from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import Logo from '../../components/shared/Logo';

import useStyles from './styles';
import {
  AUTHORIZE_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
} from '../../config/SPOTIFY';
import { useHistory } from 'react-router-dom';
import { setSession, getSession } from '../../services/auth';

const Signin = () => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    const result = window.location.hash
      .substring(1)
      .split('&')
      .reduce((data, parm) => {
        if (parm) {
          var parts = parm.split('=');
          data[parts[0]] = decodeURIComponent(parts[1]);
        }
        return data;
      }, {});
    if (result.access_token) {
      setSession(result);
      history.push('/home');
    }
  }, [history]);

  useEffect(() => {
    if (getSession()) {
      history.push('/home');
    }
  }, [history]);

  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Logo direction="column" />
        </Grid>
        <Grid item>
          <Typography variant="h6">
            Encontre aqui aquela a playlist ideal para o seu dia.
          </Typography>
        </Grid>
        <Grid item>
          <Box mt={5}>
            <a
              className={classes.btn_singin}
              href={`${AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
              Entrar com conta spotify
            </a>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signin;
