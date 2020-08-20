/**
 *
 * Playlists
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import Loader from '../Loader'
import PlaylistCard from '../PlaylistCard'
import Text from '../Text'

import { PlaylistsWrapper } from './styles'

export function Playlists(props) {
  const {
    playlistResponse: {
      message,
      playlists,
    },
    nameFilter,
    isLoading,
  } = props

  if (isLoading) {
    return <Loader />
  }

  if (!playlists) {
    return null
  }

  const filteredPlaylists = playlists.items.reduce((acc, playlist) => {
    if (playlist.name.toUpperCase().includes(nameFilter.toUpperCase())) {
      acc.push(
        <PlaylistCard
          key={playlist.id}
          {...playlist}
        />,
      )
    }

    return acc
  }, [])

  return (
    <div>
      <Text bold uppercase big>
        {message}
      </Text>
      {filteredPlaylists.length ? (
        <PlaylistsWrapper>
          {filteredPlaylists}
        </PlaylistsWrapper>
      ) : (
        <Text>
          Nenhuma playlist encontrada
        </Text>
      )}
    </div>
  )
}

Playlists.propTypes = {
  playlistResponse: PropTypes.object.isRequired,
  nameFilter: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
}

export default Playlists
