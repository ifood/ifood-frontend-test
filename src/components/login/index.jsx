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
        <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
          Spotify e Ifood, juntos para saciar a sua sede (e fome) musical!
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Vamos começar? É só clicar aí em baixo e se conectar com sua conta Spotify! ;)
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary" href="https://accounts.spotify.com/authorize?client_id=58b105c3bef543ae978f7329e2f4905a&response_type=token&redirect_uri=http://localhost:3000/main">
                Começar!
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}