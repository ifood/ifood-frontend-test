import React from 'react';
import Proptypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const PlaylistCard = ({
  href,
  name,
  image,
}) => ((
  <Card className="playlist-card">
    <a href={href} target="_blank">
      <CardMedia
        className="playlist-card__image"
        image={image}
      />
      <CardContent className="playlist-card__content">
        <Typography
          gutterBottom
          component="h2"
          className="playlist-card__name"
        >
          {name}
        </Typography>
      </CardContent>
    </a>
  </Card>
));

PlaylistCard.propTypes = {
  href: Proptypes.string,
  name: Proptypes.string,
  image: Proptypes.string,
};

export default PlaylistCard;
