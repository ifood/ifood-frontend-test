import React from 'react'
import { Filters } from '../../modules/filter'
import { Playlist } from '../../modules/playlist'
import { Navbar } from '../../commons-components/navbar'
import { BoxContainer } from '../../commons-components/boxContainer'



const FeaturedPlaylist = ({
  filters,
  getFilter,
  getPlaylist,
  playlists,
  message,
  loadingFilters,
  loadingPlaylists
}) => {

  return (
    <>
    <Navbar />
    <BoxContainer style={{flexDirection: 'column'}}>
      <Filters
        filters={filters}
        getFilter={getFilter}
        getPlaylist={getPlaylist}
        loadingFilters={loadingFilters}
      />

      <Playlist
        playlists={playlists}
        message={message}
        loadingPlaylists={loadingPlaylists}
      />
    </BoxContainer>
    </>
  )
}

export default FeaturedPlaylist
