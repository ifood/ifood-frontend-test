import React, { useEffect, useState } from 'react';

import { Playlists, Filter } from '../components';

import * as FilterService from '../services/filter';
import * as PlaylistService from '../services/playlist';

function IndexPage() {
  const [filters, setFilters] = useState([]);
  const [playlists, setPlayLists] = useState([]);
  const [titlePlaylist, setTitlePlaylist] = useState('');


  useEffect(() => {
    const _getDataFilter = async () => {
      const response = await FilterService.getFilters();
      setFilters(response.filters);
    }

    const _getDataPlaylist = async () => {
      const response = await PlaylistService.getPlaylist();
      setTitlePlaylist(response.message);
      setPlayLists(response.playlists.items);
    }

    _getDataFilter();
    _getDataPlaylist();
  }, []);

  return (
    <>
      {filters.length > 0 &&
        <Filter elements={filters} />
      }
      {playlists.length > 0 && titlePlaylist &&
        <Playlists list={playlists} title={titlePlaylist}/>
      }
    </>
  );
} 

export default IndexPage;
