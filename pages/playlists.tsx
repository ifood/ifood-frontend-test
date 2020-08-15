import React from 'react';
import PlaylistShowcase from '../components/PlaylistShowcase/PlaylistShowcase';
import { withContext } from '../hocs/withContext';
import usePlaylists, { PlaylistProvider } from '../contexts/PlaylistContext';

const PlaylistsPage: React.FC = () => {
  const context = usePlaylists();
  const { playlists, featuredPlaylists } = context;

  return (
    <>
      <PlaylistShowcase
        playlists={playlists}
        message={featuredPlaylists?.message}
      />
    </>
  );
};

export default withContext(PlaylistProvider, PlaylistsPage);
