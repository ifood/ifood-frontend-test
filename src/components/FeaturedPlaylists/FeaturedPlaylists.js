import React from 'react';
import shortid from 'shortid';
import PlaylistCard from './PlaylistCard';
import style from './featured-playlists.module.css';

const FeaturedPlaylists = ({
  featuredPlaylist = {}
}) => {
  return (
    <div className={`row ${style.row}`}>
      {
        Boolean(featuredPlaylist.playlists) ? featuredPlaylist.playlists.items.map(item =>
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