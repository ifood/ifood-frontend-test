import React from 'react';

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

export default PlaylistCard;