import React from 'react';

import Playlist from '../../../components/Playlist';

import { useFeaturedPlaylist } from '../../../hooks/featuredPlaylists';

import Container from './styles';

const PlaylistList = () => {
  const { playlists } = useFeaturedPlaylist();

  return (
    <Container>
      {playlists.map((playlist: any) => <Playlist key={playlist.id} {...playlist} />)}
    </Container>
  );
};

export default PlaylistList;
