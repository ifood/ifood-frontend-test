import React, { useEffect, useState } from 'react';

import { Playlists } from '../components';

import * as FilterService from '../services/filter';
import * as PlaylistService from '../services/playlist';

function IndexPage() {
  const [filters, setFilters] = useState([]);
  const [playlists, setPlayLists] = useState([]);
  const [titlePlaylist, setTitlePlaylist] = useState('');


  useEffect(() => {
    const getDataFilter = async () => {
      const response = await FilterService.getFilters();
      if(response) setFilters(response.filters);
    }

    const getDataPlaylist = async () => {
      const response = await PlaylistService.getPlaylist();
      if(response) {
        setTitlePlaylist(response.message);
        setPlayLists(response.playlists.items);
      }
    }

    getDataFilter();
    getDataPlaylist();
  }, []);

  return (
    <>
      {playlists.length > 0 &&
        <Playlists list={playlists} title={titlePlaylist}/>
      }
    </>
  );
} 

export default IndexPage;
