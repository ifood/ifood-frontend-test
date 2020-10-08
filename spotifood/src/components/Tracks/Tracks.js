import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

import useProtectedRoute from '../../hooks/useProtectedRoute';
import AppContext from '../../context/AppContext';

import { Song } from '../Song/Song';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Box, Backdrop, CircularProgress, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    box: {
      margin: 'auto',
      maxWidth: 600,
      paddingTop: 24
    },
    media: {
      height: 280,
    },
}));

export const Tracks = () => {
    const classes = useStyles();
    const params = useParams();
    const history = useHistory();
    const token = useProtectedRoute();
    const appContext = useContext(AppContext);

    const [ playlistDetails, setPlaylistDetails ] = useState({});
    const [ tracks, setTracks ] = useState([]);
    const [ requestMessage, setRequestMessage ] = useState("");
    const [open, setOpen] = useState(true);

    const getPlaylist = async() => {
      const id = params.playlistId;
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      
      try {
        const response = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, axiosConfig)
        
        setPlaylistDetails(response.data)
        appContext.dispatch({ type: "GET_SINGLE_PLAYLIST", activePlaylist: response.data });
  
      } catch(err) {
        setRequestMessage("Você deve estar logado para visualizar as playlists.")
      }
    }

    const getTracks = async() => {
      const id = params.playlistId;

      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      
      try {
        const response = await axios.get(`https://api.spotify.com/v1/playlists/${id}/tracks`, axiosConfig)
  
        setTracks(response.data.items)
  
      } catch(err) {
        setRequestMessage("Você deve estar logado para visualizar as playlists.")
      }
    }

    const handleToggle = () => {
      setOpen(!open);
    };

    const goToPlaylists = () => {
      history.push('/playlists')
    }
  
    useEffect(() => {
      getPlaylist();
      getTracks();
    }, [])

    return (
      <Box className={classes.box}>
        {playlistDetails.name && <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={playlistDetails.images[0].url}
              title={playlistDetails.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {playlistDetails.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {playlistDetails.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {playlistDetails.tracks.total} músicas
              </Typography>
            </CardContent>
        </Card>}
        <Box>
          {tracks && tracks.length === 0 ? 
              <Backdrop className={classes.backdrop} open={open} onClick={handleToggle}>
                <CircularProgress color="inherit" />
              </Backdrop> : tracks.map(item => {
              return <div key={item.track.id}>
                <Song key={item.track.id} title={item.track.name} artist={item.track.artists} song={item.track.preview_url} />
              </div>})}
            {tracks.length === 0 && requestMessage !== "" && <Typography>
                {requestMessage}
              </Typography>
            }
        </Box>
        <Button color="primary" onClick={goToPlaylists}>Voltar</Button>
      </Box>
    )
}