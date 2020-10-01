import React from 'react';
import useFilters from '../../hooks/useFilters';

import './Playlists.scss';

import PlaylistFilter from './components/PlaylistFilters/PlaylistFilter';
import Header from '../../components/Header/Header';

const Playlists = () => {
  const filters = useFilters();

  return (
    <>
      <Header />
      <div className="playlists container">
        <div className="playlists-topbar">
          <PlaylistFilter filters={filters} />
        </div>
        <div className="playlists-content">

        </div>
      </div>
    </>
  )
}

export default Playlists;
