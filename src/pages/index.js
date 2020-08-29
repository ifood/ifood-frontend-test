import React, { useEffect, useState } from 'react';

import { Filter, Playlists } from '../components';

import * as PlaylistService from '../services/playlist';

function IndexPage() {
  const [playlists, setPlayLists] = useState([]);
  const [titlePlaylist, setTitlePlaylist] = useState('');
  const [filteredPlaylist, setFilteredPlaylist] = useState([]);
  const [parameters, setParameters] = useState('?');
  const [mustUpdate, setMustUpdate] = useState(false);

  useEffect(() => {
    _getDataPlaylist(parameters);
    _startTimeout();
  }, [parameters, mustUpdate]);

  const _getDataPlaylist = async (parameters) => {
    const response = await PlaylistService.getPlaylist(parameters);

    if(JSON.stringify(playlists) === JSON.stringify(response.playlists.items)) return;
    _setInfos(response);
  }

  const _startTimeout = () => {
    setTimeout(() => {
      setMustUpdate(!mustUpdate);
    }, 30000)
  }

  const _setInfos = (response) => {
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
