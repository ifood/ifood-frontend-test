import React from 'react';
// import styles from './featured-playlists.module.css';

const PlaylistCard = (props) => (
  <div className="col-4">
    <div className="card">
    <img className="card-img-top" src={props.imageUrl} alt={props.name} />
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">Total tracks: {props.tracks.total}</p>
      <a href={props.externalUrl} className="btn btn-primary">See on Spotify</a>
    </div>
  </div>
  </div>
);

const FeaturedPlaylists = ({
  featuredPlaylist = {}
}) => {
  return (
    <div className="container">
      <div className="row">
      {
        Boolean(featuredPlaylist.playlists) ? featuredPlaylist.playlists.items.map(item =>
          <PlaylistCard
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