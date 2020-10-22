import React from 'react'
import { object, string, func } from 'prop-types'
import { Filter } from '../../modules/filter'
import { Playlist } from '../../modules/playlist'
import { Navbar, BoxContainer } from '../../commonsComponents'

const propTypes = {
  playlists: object.isRequired,
  message: string.isRequired,
  filters: object.isRequired,
  getFilters: func.isRequired,
  getPlaylists: func.isRequired,
}

export const FeaturedPlaylist = ({
  filters,
  getFilters,
  getPlaylists,
  playlists,
  message,
}) => {

  return (
    <>
      <Navbar />
      <BoxContainer style={{flexDirection: 'column'}}>
        <Filter
          filters={filters}
          getFilters={getFilters}
          getPlaylists={getPlaylists}
        />

        <Playlist
          playlists={playlists}
          message={message}
        />
      </BoxContainer>
    </>
  )
}

FeaturedPlaylist.propTypes = propTypes
