import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { useStyles } from "../../../style/styles"

import Logo from '../../../resources/donut-green.svg';
import Title from '../../../resources/spotifood.svg';

export default function HeaderComponent() {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.header}>
      <Toolbar>
        <img src={Logo} alt="React Logo" className={classes.iconDonut} />
        <img src={Title} alt="React Logo" className={classes.iconSpotifood} />
      </Toolbar>
    </AppBar>
  )
};