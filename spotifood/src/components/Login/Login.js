import React, { useState, useEffect } from 'react';

import useProtectedRoute from '../../hooks/useProtectedRoute';

import { makeStyles } from '@material-ui/core/styles';
import { Box,Button, Link } from '@material-ui/core';

const useStyles = makeStyles({
    center: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 24,
      marginTop: 24,
    }
});

export const Login = () => {
    const classes = useStyles();
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const hasToken = useProtectedRoute();
    
    const getHashParams = () => {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
        e = r.exec(q);
        }

        return hashParams;
    }
  
    useEffect(() => {
        const params = getHashParams();
        const token = params.access_token;

        if(token) {
            window.localStorage.setItem("token", token);
            setIsLoggedIn(true)
        }

        if(hasToken) {
            setIsLoggedIn(true)
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLoggedIn(false);
    }

    return (
        <Box className={classes.center}>
        {isLoggedIn ? 
            <Button color="primary" variant="contained"onClick={handleLogout}>Logout</Button>
        : 
            <Button color="primary" variant="contained"><Link color="secondary" href="http://localhost:8888">Entrar</Link></Button>
        }
        </Box>
    )
}