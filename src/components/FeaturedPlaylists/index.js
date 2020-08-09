import React, { useState, useEffect } from 'react';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  TextField,
  Box,
} from '@material-ui/core';
import useStyles from './styles';
import { API_SPOTIFY } from '../../config/API';

const FeaturedPlaylists = () => {
  const classes = useStyles();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    (async () => {
      API_SPOTIFY.get(
        '/v1/browse/featured-playlists?timestamp=2020-08-09T14%3A13%3A22&offset=0&limit=20'
      ).then(response => {
        setPlaylists(prevState => response.data.playlists.items);
      });
    })();
  }, []);
  console.log(playlists);
  function searchPlaylist(event) {
    return true;
  }

  return (
    <div className={classes.root}>
      <Grid
        component={Box}
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        mb={4}>
        <Grid item>
          <Typography variant="h4" gutterBottom className={classes.title}>
            Destaques
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            id="search"
            label="Buscar"
            variant="outlined"
            size="small"
            type="search"
            onChange={e => searchPlaylist(e.target.value)}
          />
        </Grid>
      </Grid>

      <Grid container justify="flex-start" spacing={3}>
        {playlists.map((playlist, key) => (
          <Grid key={key} item>
            <Card className={classes.card} elevation={0}>
              <CardMedia
                className={classes.media}
                image={playlist.images[0].url}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {playlist.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {playlist.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FeaturedPlaylists;
