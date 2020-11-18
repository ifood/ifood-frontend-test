import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import InfiniteScroll from 'react-infinite-scroll-component';

import FiltersComponent from "../filters"
import { getSpotifyFeaturedPlaylists } from "../../services/api/endpoints"

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { useStyles } from "../../style/styles"

export default function MainComponent() {
  const [playlistsItems, setPlaylistsItems] = useState([]);
  const [localSearch, setLocalSearch] = useState([]);
  const [hasMore, setHasMore] = useState(true)

  const filtersRedux = useSelector(store => store.apiFilterChangeReducer);
  console.log(filtersRedux);

  const classes = useStyles();

  useEffect(() => {
    (async () => {
      setHasMore(true);
      await getPlaylists();

      setInterval(async () => {
        setHasMore(true);
        window.scrollTo(0, 0);
        await getPlaylists();
      }, 30000);
    })();
    // eslint-disable-next-line
  }, [, filtersRedux]);

  const getPlaylists = async(autoScrollCall = false) => {
    const urlParams = window.location.hash.substring(1).split('&');
    const params = urlParams.reduce((paramsObj, param) => {
      const auxObj = paramsObj;

      const splittedParam = param.split('=');
      console.log(splittedParam);
      auxObj[splittedParam[0]] = splittedParam[1];

      return auxObj;
    },[]);

    const extractedFilterValues = {...filtersRedux.apiFilterSelectedValues}

    if(autoScrollCall){
      extractedFilterValues.offset = extractedFilterValues.limit;
      extractedFilterValues.limit = parseInt(extractedFilterValues.limit) + 6;
    }
        
    let featuredPlaylistsResponse = await getSpotifyFeaturedPlaylists(extractedFilterValues, params.access_token);
    
    if(autoScrollCall && (extractedFilterValues.limit <= featuredPlaylistsResponse.total || featuredPlaylistsResponse.total % 6 !== 0) ){
      featuredPlaylistsResponse.items = [...new Set([...playlistsItems,...featuredPlaylistsResponse.items])];
      setHasMore(false);
    }
    
    setPlaylistsItems(featuredPlaylistsResponse.items);
  }

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <FiltersComponent />
      <div className={classes.localSearch}>
        <TextField id="outlined-basic" label="Search (by playlist name)" variant="outlined" 
          onChange={event => setLocalSearch(event.target.value)}
        />
      </div>
      <InfiniteScroll
        dataLength={playlistsItems.length}
        next={() => getPlaylists(true)}
        hasMore={hasMore}
        style={{overflow: 'hidden'}}
      >
        <Grid container spacing={4}>
        {playlistsItems.map((playlist) => (
          playlist.name.toLowerCase().includes(localSearch) &&
            <Grid item xs={12} sm={6} md={4} key={playlist.id}>
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
                  <CardActions className={classes.cardButton}>
                    <Tooltip title="Abrir no Spotify Web Player" placement="right">
                      <IconButton size="small" color="primary" className={classes.buttons}
                        href={playlist.external_urls.spotify} target="_blank">
                        <PlayArrowIcon />
                      </IconButton>
                    </Tooltip>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
        ))}
      </Grid>
      </InfiniteScroll>
    </Container>
  )
}