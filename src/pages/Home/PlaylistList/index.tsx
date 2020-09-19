import React from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';

import Playlist from '../../../components/Playlist';

import { useFeaturedPlaylist } from '../../../hooks/featuredPlaylists';

import Container from './styles';

const PlaylistList = () => {
  const { playlists, loading } = useFeaturedPlaylist();

  return (
    <>
      {loading && <LinearProgress />}
      <Container>
        {playlists.map((playlist: any) => <Playlist key={playlist.id} {...playlist} />)}
      </Container>
    </>
  );
};

export default PlaylistList;
