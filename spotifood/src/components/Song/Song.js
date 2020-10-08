import React, { useEffect, useState } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, CardContent, Typography, IconButton, Link } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 16,
    marginBottom: 8,
  },
  details: {
    width: 'calc(100% - 40px)',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
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
    textAlign: 'left'
  },
}));

export const Song = (props) => {
    const classes = useStyles();

    const [ play, setPlay ] = useState(false);

    const audio = new Audio(props.song)

    const playSong = () => {
      setPlay(true)
      audio.play()
    }

    const pauseSong = () => {
      setPlay(false)
      audio.pause()
    }

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="subtitle1" className={classes.title}>
                        {props.title}
                    </Typography>
                    {props.artist.map( artist => {
                      return <Typography variant="body1" color="textSecondary"  className={classes.text}>
                          {artist.name}
                      </Typography>
                    })}
                </CardContent>
            </div>
            {!play ? <IconButton aria-label="play/pause" onClick={playSong}>
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton> : <IconButton aria-label="play/pause" onClick={pauseSong} >
                <PauseIcon className={classes.playIcon} />
            </IconButton>}
        </Card>
    )
}