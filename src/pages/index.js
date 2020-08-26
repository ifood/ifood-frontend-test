import React, { useEffect, useState } from 'react';

import { Hello } from '../components';

import * as FilterService from '../services/filter';
import * as PlaylistService from '../services/playlist';

function IndexPage() {
  const [filters, setFilters] = useState([]);
  const [playlist, setPlayList] = useState([]);

  useEffect(() => {
    const getDataFilter = async () => {
      const response = await FilterService.getFilters();
      setFilters(response.filters);
    }

    const getDataPlaylist = async () => {
      const response = await PlaylistService.getPlaylist();
      setPlayList(response.items);
    }
    getDataFilter();
    getDataPlaylist();
  }, []);

  return (
    <Hello />
  );
} 

export default IndexPage;
