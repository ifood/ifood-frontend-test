import React from 'react';

import Playlist from '../../../components/Playlist';

import { useFeaturedPlaylist } from '../../../hooks/featuredPlaylists';

const PlaylistList = () => {
  const { playlists } = useFeaturedPlaylist();

  return (
    <div>
      {playlists.map((playlist: any) => <Playlist key={playlist.id} {...playlist} />)}
    </div>
  );
};

export default PlaylistList;
