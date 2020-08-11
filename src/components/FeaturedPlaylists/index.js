import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playlistActions } from '../../stores/modules/playlist/actions';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  TextField,
  Box,
  Icon,
  CircularProgress,
} from '@material-ui/core';
import useStyles from './styles';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';

const FeaturedPlaylists = ({ filters }) => {
  const classes = useStyles();
  const SPOTIFY_PLAYLISTS = useSelector(state => state.playlist);
  const dispatch = useDispatch();
  const [playlists, setPlaylists] = useState([]);
  const [filter, setFilter] = useState(filters);

  useEffect(() => {
    if (
      !SPOTIFY_PLAYLISTS.success ||
      JSON.stringify(filter) !== JSON.stringify(filters)
    ) {
      dispatch(playlistActions.index(filters));
    }

    setPlaylists(prevState => SPOTIFY_PLAYLISTS.data);
    setFilter(prevState => filters);
  }, [dispatch, SPOTIFY_PLAYLISTS, filters, filter]);

  const onSearch = event => {
    const filter = SPOTIFY_PLAYLISTS.data.filter(playlist => {
      return playlist.name.toLowerCase().indexOf(event.toLowerCase()) >= 0;
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
            color="secondary"
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
      {/* LOADING */}
      {SPOTIFY_PLAYLISTS.loading && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column">
          <CircularProgress color="secondary" size={64} />
        </Box>
      )}
      {/* PLAYLIST EMPTY */}
      {SPOTIFY_PLAYLISTS.success && playlists.length < 1 && (
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
