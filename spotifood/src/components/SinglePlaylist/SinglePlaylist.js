import React from 'react';
import { useHistory } from 'react-router-dom';

import AppContext from '../../context/AppContext';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, IconButton, CardMedia } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: 16,
      marginBottom: 8,
    },
    details: {
      width: 'calc(75% - 40px)',
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: '25%'
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 36,
      width: 36
    },
    title: {
      display: 'block',
      fontSize: 14,
      fontWeight: 700,
      textAlign: 'left'
    },
    text: {
      display: 'block',
      fontSize: 14,
      lineHeight: '150%',
      textAlign: 'left',
      paddingTop: 4
    },
}));

export const SinglePlaylist = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const goToPlaylist = id => {
        history.push(`/playlists/${id}`)
    }

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={props.image}
                title={props.title}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="subtitle1"  className={classes.title}>
                        {props.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" className={classes.text}>
                        {props.description}
                    </Typography>
                </CardContent>
            </div>
            <IconButton aria-label="play/pause" onClick={() => goToPlaylist(props.id)}>
                    <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
        </Card>
    )
}