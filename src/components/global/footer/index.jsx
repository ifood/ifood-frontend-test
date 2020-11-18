import React from "react";

import Typography from '@material-ui/core/Typography';
import { useStyles } from "../../../style/styles"

export default function FooterComponent() {
  const classes = useStyles();
  
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Something here to give the footer a purpose!
      </Typography>
    </footer>
  )
};