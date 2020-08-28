import React, { useEffect, useState } from 'react';

import { Playlists, Filter } from '../components';

import * as PlaylistService from '../services/playlist';

function IndexPage() {
  const [playlists, setPlayLists] = useState([]);
  const [titlePlaylist, setTitlePlaylist] = useState('');
  const [filteredPlaylist, setFilteredPlaylist] = useState([]);

  useEffect(() => {
    const _getDataPlaylist = async () => {
      const response = await PlaylistService.getPlaylist();
      setTitlePlaylist(response.message);
      setPlayLists(response.playlists.items);
      setFilteredPlaylist(response.playlists.items);
    }

    _getDataPlaylist();
  }, []);

  return (
    <>
      {playlists.length > 0 &&
        <Filter setFilteredPlaylist={setFilteredPlaylist} playlists={playlists} />
      }
      {playlists.length > 0 && titlePlaylist &&
        <Playlists list={filteredPlaylist} title={titlePlaylist} />
      }
    </>
  );
} 

export default IndexPage;
