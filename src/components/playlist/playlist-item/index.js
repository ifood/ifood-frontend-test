import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  card: {
    cursor: 'pointer',
    marginBottom: 10
  },
  link: {
    textDecoration: 'none'
  },
  cover: {
    maxWidth: '100%',
    height: 'auto',
    margin: '0 auto 10px',
    display: 'block'
  },
  title: {
    fontSize: 14,
    fontWeight: 600
  },
  description: {
    fontSize: 12,
    lineHeight: 1
  }
})

export function PlaylistItem({ playlist }) {
  const classes = useStyles()
  const { external_urls: externalUrls, name, images, description } = playlist

  const sanitizedDescription = description.replace(/<[^>]+>/g, '')
  const descriptionText =
    sanitizedDescription.length > 50
      ? `${sanitizedDescription.substr(0, 50)}...`
      : sanitizedDescription

  return (
    <Card className={classes.card}>
      <a
        className={classes.link}
        href={externalUrls.spotify}
        target='_blank'
        rel='noopener noreferrer'
      >
        <CardContent>
          <img className={classes.cover} alt={name} src={images[0].url} />
          <Typography
            gutterBottom
            variant='body2'
            component='h3'
            color='textSecondary'
            className={classes.title}
          >
            {name}
          </Typography>
          <Typography
            className={classes.description}
            variant='caption'
            color='textSecondary'
          >
            {descriptionText}
          </Typography>
        </CardContent>
      </a>
    </Card>
  )
}

PlaylistItem.propTypes = {
  playlist: PropTypes.shape({
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string
      })
    ).isRequired,
    external_urls: PropTypes.shape({
      spotify: PropTypes.string
    }).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
}
