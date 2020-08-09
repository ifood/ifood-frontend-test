import React, { useState, useEffect } from 'react';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  TextField,
  Box,
  Icon,
} from '@material-ui/core';
import useStyles from './styles';
import { API_SPOTIFY } from '../../config/API';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';

const FeaturedPlaylists = () => {
  const classes = useStyles();
  const [SPOTIFY_PLAYLISTS, SET_SPOTIFY_PLAYLISTS] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await API_SPOTIFY.get(
        '/v1/browse/featured-playlists?locale=pt_BR&country=BR&timestamp=2020-08-09T18:24:00.000Z&limit=10&offset=1'
      );
      SET_SPOTIFY_PLAYLISTS(prevState => result.data.playlists.items);
      setPlaylists(prevState => result.data.playlists.items);
    })();
  }, []);

  const onSearch = event => {
    const filter = SPOTIFY_PLAYLISTS.filter(playlist => {
      return playlist.name.toLowerCase().indexOf(event) >= 0;
    });
    return setPlaylists(prevState => filter);
  };

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
            onChange={e => onSearch(e.target.value)}
          />
        </Grid>
      </Grid>

      <Grid container justify="flex-start" spacing={3}>
        {playlists.length > 0 &&
          playlists.map((playlist, key) => (
            <Grid key={key} item>
              <Card className={classes.card} elevation={0}>
                <CardMedia
                  className={classes.media}
                  image={playlist.images[0].url}
                  title={`Image - ${playlist.name}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {playlist.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p">
                    {playlist.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
      {playlists.length < 1 && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column">
          <Icon fontSize="large">
            <AudiotrackIcon fontSize="large" color="error" />
          </Icon>
          <Typography color="textSecondary">
            Nenhuma playlist encontrada.
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default FeaturedPlaylists;
