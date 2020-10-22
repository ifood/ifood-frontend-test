import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
}));

export const BoxContainer = ({children, style}) => {
  const classes = useStyles();
  return (
    <Box style={style} className={classes.root}>{children}</Box>
  )
}
