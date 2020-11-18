import React from "react";

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useStyles } from "../../style/styles"

export default function HeaderComponent() {

  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="md" >
        <div className={classes.loginContainer}>
          <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
            <b>Spotify and iFood</b><br/>together, to satisfy your musical hunger!
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Shall we begin? You just have to click the button and log into your Spotify account! ;)
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary" className={classes.buttons}
                  href="https://accounts.spotify.com/authorize?client_id=58b105c3bef543ae978f7329e2f4905a&response_type=token&redirect_uri=http://localhost:3000/main">
                  BEGIN!
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  )
}