import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

import FiltersComponent from "../filters"
import { getSpotifyFeaturedPlaylists } from "../../services/api/endpoints"

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { useStyles } from "../../style/styles"

export default function MainComponent() {
  const [playlistsItems, setPlaylistsItems] = useState([]);
  const [localSearch, setLocalSearch] = useState([]);

  const filtersRedux = useSelector(store => store.apiFilterChangeReducer);
  console.log(filtersRedux);

  const classes = useStyles();

  useEffect(() => {
    (async () => {
      await getPlaylists();
      setInterval(async () => {
        await getPlaylists();
      }, 30000);
    })();
    // eslint-disable-next-line
  }, [, filtersRedux]);

  const getPlaylists = async() => {
    const urlParams = window.location.hash.substring(1).split('&');
    const params = urlParams.reduce((paramsObj, param) => {
      const auxObj = paramsObj;

      const splittedParam = param.split('=');
      console.log(splittedParam);
      auxObj[splittedParam[0]] = splittedParam[1];

      return auxObj;
    },[]);
        
    const featuredPlaylistsResponse = await getSpotifyFeaturedPlaylists(filtersRedux.apiFilterSelectedValues, params.access_token);
    console.log(featuredPlaylistsResponse);
    setPlaylistsItems(featuredPlaylistsResponse);
  }

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <FiltersComponent />
      <div className={classes.localSearch}>
        <TextField id="outlined-basic" label="Busca local" variant="outlined" 
          onChange={event => setLocalSearch(event.target.value)}
        />
      </div>
      <Grid container spacing={4}>
        {playlistsItems.map((playlist) => (
          playlist.name.toLowerCase().includes(localSearch) &&
            <Grid item key={playlist} xs={12} sm={6} md={4} key={playlist.id}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={playlist.images[0].url}
                  title={playlist.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" component="h2">
                    {playlist.name}
                  </Typography>
                  <Typography gutterBottom>
                    by {playlist.owner.display_name}
                  </Typography>
                  <Typography>
                    {playlist.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
        ))}
      </Grid>
    </Container>
  )
}