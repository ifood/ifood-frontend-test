import React from 'react';
import { makeStyles, InputLabel } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
  input: {
    backgroundColor: '#9a905d',
    color: 'grey',
    overflow: 'hidden',
  }
});

export const SliderInput = ({filter, inputsResolver}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <InputLabel>{filter.name}</InputLabel>
      <input
        className={classes.input}
        type="range"
        id={filter.id}
        name={filter.name}
        defaultValue={20}
        min="0"
        step='1'
        max="50"
        onChange={(e) => inputsResolver(filter.id, e.target.value)}/>
    </div>
  );
}
