import React from 'react';
import shortid from 'shortid';
import PlaylistCard from './PlaylistCard';
// import styles from './featured-playlists.module.css';

const FeaturedPlaylists = ({
  featuredPlaylist = {}
}) => {
  return (
    <div className="container">
      <div className="row">
        {
          Boolean(featuredPlaylist.playlists) ? featuredPlaylist.playlists.items.map(item =>
            <PlaylistCard
              key={shortid()}
              name={item.name}
              imageUrl={item.images[0].url}
              tracks={item.tracks}
              externalUrl={item.external_urls.spotify}
            />
          ) : <p>Gostaria de filtrar sua playlist? :)</p>
        }
      </div>
    </div>
  )
}

export default FeaturedPlaylists;