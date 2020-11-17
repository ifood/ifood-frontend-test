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
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Album layout
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Something short and leading about the collection below—its contents, the creator, etc.
          Make it short and sweet, but not too short so folks don&apos;t simply skip over it
          entirely.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary" href="https://accounts.spotify.com/authorize?client_id=58b105c3bef543ae978f7329e2f4905a&response_type=token&redirect_uri=http://localhost:3000/main">
                Main call to action
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}