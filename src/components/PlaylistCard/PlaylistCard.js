import React from 'react';
import Proptypes from 'prop-types';

const PlaylistCard = ({
  href,
  name,
  image,
}) => ((
  <div className="card">
    <div className="card-image">
      <a href={href} target="_blank">
        <figure className="image is-4by3">
          <img src={image} alt="playlist picure" />
        </figure>
        <span className="card-title">{name}</span>
      </a>
    </div>
  </div>
));

PlaylistCard.propTypes = {
  href: Proptypes.string,
  name: Proptypes.string,
  image: Proptypes.string,
};

export default PlaylistCard;
