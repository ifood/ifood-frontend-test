import React from 'react';
import Cookie from 'js-cookie';
import { useService, playlistService } from '../services/playlist.service';
import PlaylistShowcase from '../components/PlaylistShowcase/PlaylistShowcase';
import useAuth from '../contexts/AuthenticationContext';

const PlaylistsPage: React.FC = () => {
  const auth = useAuth();
  const params = {
    limit: 12,
  };

  const { data, error } = useService(
    auth.isAuthenticated ? playlistService.featuredPlaylists(params) : null,
  );

  if (error) {
    return <p>error</p>;
  }

  if (data == null) {
    return <p>loading...</p>;
  }

  const { playlists, message } = data;

  return (
    <>
      <PlaylistShowcase playlists={playlists.items} message={message} />
    </>
  );
};

export default PlaylistsPage;
