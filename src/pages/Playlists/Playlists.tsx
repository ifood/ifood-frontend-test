import React from 'react';
import useFilters from '../../hooks/useFilters';

import './Playlists.scss';

import PlaylistFilter from './components/PlaylistFilters/PlaylistFilter';
import Header from '../../components/Header/Header';
import { IPlaylists } from '../../types';
import Playlist from './components/Playlist/Playlist';
import useSearch from '../../hooks/useSearch';
import Loader from '../../components/Loader/Loader';

const Playlists = () => {
  const { filters, loading: loadingFilters } = useFilters();
  const { handleFilters, playlists, onSearch, loading: loadingPlaylists  } = useSearch();

  return (
    <>
      <Header />
      <div className="playlists container">
        <div className="playlists-topbar">
          <PlaylistFilter
            filters={filters}
            loading={loadingFilters}
            onChangeFilters={handleFilters}
            onChangeInputFilters={handleFilters}
            onSearch={onSearch}
          />
        </div>
        {loadingPlaylists ? (
          <Loader />
        ) : (
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
        )}
      </div>
    </>
  )
}

export default Playlists;
