import React from 'react';
import useFilters from '../../hooks/useFilters';

import './Playlists.scss';

import PlaylistFilter from './components/PlaylistFilters/PlaylistFilter';
import Header from '../../components/Header/Header';
import { IPlaylists } from '../../types';
import Playlist from './components/Playlist/Playlist';
import usePlaylists from '../../hooks/usePlaylists';

const Playlists = () => {
  const filters = useFilters();
  const playlists = usePlaylists();

  return (
    <>
      <Header />
      <div className="playlists container">
        <div className="playlists-topbar">
          <PlaylistFilter filters={filters} />
        </div>
        <div className="playlists-content">
          {playlists.map((playlist: IPlaylists) => {
            const { images, external_urls, name, id, description } = playlist;
            const { url: imageUrl } = images[0];
            const { spotify } = external_urls;

            return (
              <Playlist
                key={id}
                name={name}
                imageUrl={imageUrl}
                spotify={spotify}
                description={description}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Playlists;
