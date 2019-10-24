import React from 'react';
import shortid from 'shortid';
import PlaylistCard from './PlaylistCard';
import style from './featured-playlists.module.css';

const filterByName = (name) => item =>
  item.name.toLowerCase().indexOf(name.toLowerCase()) > -1;

const FeaturedPlaylists = React.memo(({
  playlists = { items: [] },
  nameFilter = ''
}) => {
  const filteredPlaylists = nameFilter
    ? playlists.items.filter(filterByName(nameFilter))
    : playlists.items;
  return (
    <div className={`row ${style.playlistWrapper}`}>
      {
        Boolean(filteredPlaylists.length) ? filteredPlaylists.map(item =>
          <PlaylistCard
            key={shortid()}
            name={item.name}
            imageUrl={item.images[0].url}
            tracks={item.tracks}
            externalUrl={item.external_urls.spotify}
          />
        ) :
        <p className={style.noResultsText}>
          {
            nameFilter && Boolean(playlists.items.length)
              ? 'Nenhum resultado encontrado'
              : 'Selecione a playlist'
          }
        </p>
      }
    </div>
  )
});

export default FeaturedPlaylists;