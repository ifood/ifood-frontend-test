import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AdjustIcon from '@material-ui/icons/Adjust';

import { useStyles } from "../../../style/styles"

export default function HeaderComponent() {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <AdjustIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Spotifood
        </Typography>
      </Toolbar>
    </AppBar>
  )
};