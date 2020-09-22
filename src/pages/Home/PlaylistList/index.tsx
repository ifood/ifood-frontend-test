import React from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';

import Playlist from '../../../components/Playlist';

import { useFeaturedPlaylist } from '../../../hooks/featuredPlaylists';

import { Container, EmptyState } from './styles';

const PlaylistList = () => {
  const { playlists, loading } = useFeaturedPlaylist();

  const getEmptyState = () => {
    if (loading || playlists?.length) {
      return null;
    }

    return (
      <EmptyState>
        Não encontramos nenhuma playlist.
        <br />
        <span role="img" aria-label="Envergonhado">😬</span>
      </EmptyState>
    );
  };

  return (
    <>
      {loading && <LinearProgress />}
      <Container>
        {playlists.map((playlist: any) => <Playlist data-testeid="playlist-item" key={playlist.id} {...playlist} />)}
      </Container>
      {getEmptyState()}
    </>
  );
};

export default PlaylistList;
