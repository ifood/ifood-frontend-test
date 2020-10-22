import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginTop: '10vh'
  },
}));

export const Loading = () =>  {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
}
