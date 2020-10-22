import React from 'react'
import { CardContent, Card, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    maxWidth: 600,
    margin: 10,
    maxHeight: 610
  },
  title: {
    fontSize: 26,
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    maxWidth: 520
  },
  image: {
    display: 'block',
    margin: '0 auto',
    maxWidth: '32em'
  }
});

export const PlaylistCard = ({playlist}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined" key={playlist.id}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {playlist.name}
        </Typography>
        <Typography className={classes.description} variant="h6" color="textSecondary" >
        {playlist.description}
        </Typography>
        <img className={classes.image} src={playlist.images[0].url} alt={playlist.name}/>
      </CardContent>
    </Card>
  )
}
