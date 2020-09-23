import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Playlist } from '../../../interfaces/playlist';
import { useStyles } from './PlaylistsItem.jss';

interface PlaylistsItemProps {
  playlist: Playlist;
}

export const PlaylistsItem: React.FC<PlaylistsItemProps> = ({
  playlist: { name, description, image, url },
}) => {
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea href={url}>
        <CardMedia
          className={classes.image}
          image={image}
          component="img"
          title="Imagem playlist"
        />
        <CardContent>
          <Typography className={classes.name} noWrap>
            {name}
          </Typography>
          <Typography
            className={classes.description}
            variant="caption"
            color="textSecondary"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
