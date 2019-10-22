import React from 'react';
import shortid from 'shortid';
import PlaylistCard from './PlaylistCard';
import style from './featured-playlists.module.css';

const FeaturedPlaylists = ({
  playlists = {},
  nameFilter = ''
}) => {
  console.log(playlists);
  const filteredPlaylists = nameFilter
    ? playlists.items.filter(item => item.name.indexOf(nameFilter) > -1)
    : playlists.items;
  return (
    <div className={`row ${style.row}`}>
      {
        Boolean(filteredPlaylists.length) ? filteredPlaylists.map(item =>
          <PlaylistCard
            key={shortid()}
            name={item.name}
            imageUrl={item.images[0].url}
            tracks={item.tracks}
            externalUrl={item.external_urls.spotify}
          />
        ) : <p className={style.noResultsText}>Nenhum filtro aplicado no momento.</p>
      }
    </div>
  )
}

export default FeaturedPlaylists;