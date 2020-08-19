/**
 *
 * PlaylistCard
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'

import Text from '../Text'

import { StyledPlaylistCard } from './styles'

export function PlaylistCard(props) {
  const {
    id,
    images,
    name,
    description,
  } = props
  const imgUrl = get(images, '[0].url', 'icon512.png')

  return (
    <StyledPlaylistCard key={id}>
      <img src={imgUrl} alt={`${name} Playlist`} />
      <Text semiBold>
        {name}
      </Text>
      <Text small light>
        {description}
      </Text>
    </StyledPlaylistCard>
  )
}

PlaylistCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.array,
  description: PropTypes.string,
}

export default PlaylistCard
