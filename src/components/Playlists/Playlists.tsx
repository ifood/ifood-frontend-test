import React from 'react';
import Grid from '@material-ui/core/Grid';
import { PlaylistsItem } from './PlaylistsItem/PlaylistsItem';
import { Playlist } from '../../interfaces/playlist';
import { useStyles } from './Playlists.jss';

interface PlaylistsProps {
  playlists: Playlist[];
}

export const Playlists: React.FC<PlaylistsProps> = ({ playlists }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.container} container>
      {playlists.map((playlist) => (
        <Grid className={classes.item} item xs={6} sm={4} md={3} key={playlist.id}>
          <PlaylistsItem playlist={playlist} />
        </Grid>
      ))}
    </Grid>
  );
};
