import React from 'react';
import style from './playlist-card.module.css';

const PlaylistCard = (props) => (
  <div className={`col-sm-6 col-md-6 col-lg-4 ${style.cardContainer}`}>
    <div className="card">
    <img className="card-img-top" src={props.imageUrl} alt={props.name} />
    <div className={`card-body ${style.cardBody}`}>
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">Total tracks: {props.tracks.total}</p>
      <a href={props.externalUrl} className="btn btn-primary">See on Spotify</a>
    </div>
  </div>
  </div>
);

export default PlaylistCard;