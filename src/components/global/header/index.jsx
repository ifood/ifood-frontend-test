import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function HeaderComponent() {
  
  return (
    <AppBar position="relative">
      <Toolbar>
        {/* <CameraIcon className={classes.icon} /> */}
        <Typography variant="h6" color="inherit" noWrap>
          Album layout
        </Typography>
      </Toolbar>
    </AppBar>
  )
};