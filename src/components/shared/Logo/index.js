import React from 'react';
import { Box, Icon, Typography } from '@material-ui/core';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import useStyles from './styles';

const Logo = ({ direction }) => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection={direction} alignItems="center">
      <Icon fontSize="large">
        <AudiotrackIcon fontSize="large" color="error" />
      </Icon>
      <Typography variant="h4" className={classes.title}>
        Spotifood
      </Typography>
    </Box>
  );
};

export default Logo;
