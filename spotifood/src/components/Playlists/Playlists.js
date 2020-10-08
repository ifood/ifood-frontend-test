import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import useProtectedRoute from '../../hooks/useProtectedRoute';
import AppContext from '../../context/AppContext';

import { Filter } from '../Filter/Filter';
import { SinglePlaylist } from '../SinglePlaylist/SinglePlaylist';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Backdrop, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
    center: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 24
    },
    margin: {
      margin: 8
    },
    backdrop: {
      zIndex: 1,
      color: '#fff',
    },
    paddingTop: {
      paddingTop: 24
    },
});

export const Playlists = () => {
    const classes = useStyles();
    const token = useProtectedRoute();
    const appContext = useContext(AppContext);

    const [ requestMessage, setRequestMessage ] = useState("");
    const [open, setOpen] = useState(true);

    const getPlaylists = async() => {
  
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      
      try {
        setOpen(true);
        const response = await axios.get("https://api.spotify.com/v1/browse/featured-playlists", axiosConfig)
  
        appContext.dispatch({ type: "GET_PLAYLISTS", playlists: response.data.playlists.items });

        appContext.dispatch({ type: "GET_TOTAL_PLAYLISTS", total: response.data.playlists.total });

      } catch(err) {
        setOpen(false);
        setRequestMessage("Você deve estar logado para visualizar as playlists.")
      }
    }
  
    useEffect(() => {
        getPlaylists();
    }, [])

    const handleToggle = () => {
      setOpen(!open);
    };

    return (
      <Box className={classes.paddingTop}>
        <Filter />
        <Box maxWidth="md" className={classes.center}>
            {appContext && appContext.playlists.length === 0 && <Backdrop className={classes.backdrop} open={open} onClick={handleToggle}>
                <CircularProgress color="inherit" />
            </Backdrop>}
            
            {appContext && appContext.playlists.length !== 0 && appContext.playlists.map(item => {
              return <SinglePlaylist 
                key={item.name} 
                image={item.images[0].url} 
                title={item.name} 
                description={item.description} 
                totalTracks={item.tracks.total} 
                id={item.id}
            />})}

            {appContext && appContext.playlists.length === 0 && requestMessage !== "" && <Typography>
                {requestMessage}
              </Typography>
            }
        </Box>
      </Box>
    )
}