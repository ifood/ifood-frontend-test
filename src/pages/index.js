import React, { useEffect, useState } from 'react';

import { Playlists, Filter } from '../components';

import * as PlaylistService from '../services/playlist';

function IndexPage() {
  const [playlists, setPlayLists] = useState([]);
  const [titlePlaylist, setTitlePlaylist] = useState('');
  const [filteredPlaylist, setFilteredPlaylist] = useState([]);
  const [parameters, setParameters] = useState('?');

  useEffect(() => {
    _getDataPlaylist(parameters);
  }, [parameters]);

  const _getDataPlaylist = async (parameters) => {
    const response = await PlaylistService.getPlaylist(parameters);
    setTitlePlaylist(response.message);
    setPlayLists(response.playlists.items);
    setFilteredPlaylist(response.playlists.items);
  }

  return (
    <>
      {playlists.length > 0 &&
        <Filter 
          parameters={parameters}
          playlists={playlists}
          setFilteredPlaylist={setFilteredPlaylist} 
          setParameters={setParameters}
        />
      }
      {playlists.length > 0 && titlePlaylist &&
        <Playlists list={filteredPlaylist} title={titlePlaylist} />
      }
    </>
  );
} 

export default IndexPage;
