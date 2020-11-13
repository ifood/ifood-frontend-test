import React from 'react'
import PropTypes from 'prop-types'
import { isNull } from 'lodash'
import { Card } from '../../Molecule/Card'
import Typography from '@material-ui/core/Typography'
import { StyledPlaylistsCard, Loader } from './styles'

const PlaylistsCard = ({ className, playlistsFiltered, isFetching, error }) => {
  if (isFetching) return <Loader />

  if (!isNull(error)) {
    return (
      <Typography className="play-lists__error" color="textPrimary">
        {error}
      </Typography>
    )
  }

  return playlistsFiltered.length === 0 ? (
    <Typography className="play-lists__empty" color="textPrimary">
      Nenhum item a ser exibido.
    </Typography>
  ) : (
    <StyledPlaylistsCard className={className}>
      {playlistsFiltered.map(({ external_urls, id, name, images }) => {
        return (
          <Card
            key={id}
            name={name}
            imgSrc={images[0].url}
            link={external_urls.spotify}
          />
        )
      })}
    </StyledPlaylistsCard>
  )
}

PlaylistsCard.propTypes = {
  className: PropTypes.string,
  playlistsFiltered: PropTypes.array,
  isFetching: PropTypes.bool,
  error: PropTypes.string,
}

PlaylistsCard.defaultProps = {
  className: '',
  playlistsFiltered: [],
}

export default PlaylistsCard
