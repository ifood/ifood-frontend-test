import React from 'react'
import { any, object } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
}));

const propTypes = {
  children: any.isRequired,
  style: object
}

export const BoxContainer = ({children, style}) => {
  const classes = useStyles();
  return (
    <Box style={style} className={classes.root}>{children}</Box>
  )
}

BoxContainer.propTypes = propTypes
