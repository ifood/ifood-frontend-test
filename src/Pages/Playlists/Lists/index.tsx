import React from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';

import PlaylistCards from '../PlaylistCards';

import { useFeaturedPlaylist } from '../../../Hooks/playlistsHook';

import { Container, EmptyState } from './styles';

const Lists = () => {
  const { playlists } = useFeaturedPlaylist();

  const getEmptyState = () => {
    if (playlists?.length) {
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
      <LinearProgress />
      <Container>
        {playlists.map((playlist: any) => <PlaylistCards data-testeid="playlist-item" key={playlist.id} {...playlist} />)}
      </Container>
      {getEmptyState()}
    </>
  );
};

export default Lists;
