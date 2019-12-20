import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Fade from '@material-ui/core/Fade'

import { PlaylistHeader } from './playlist-header'
import { PlaylistItem } from './playlist-item'
import { PlaylistItemSkeleton } from './playlist-item-skeleton'
import { filterByText } from '../../utils/filter-by-text'

import { ErrorMessage } from '../error-message'

export function Playlist() {
  const [filtered, setFiltered] = useState([])
  const { playlists, loading, error } = useSelector(state => state.playlists)

  const renderContent = () => {
    if (error) {
      return <ErrorMessage message={error.message} />
    }

    if (!loading && !playlists.length) {
      return <Grid item>Nenhuma playlist encontrada</Grid>
    }

    const visibleList = filtered.length ? filtered : playlists

    return (loading ? Array.from(new Array(6)) : visibleList).map(
      (item, index) => (
        <Grid key={item ? item.id : index} item xs={12} md={3} xl={2}>
          <Fade in>
            {!item ? (
              <Box mb={2}>
                <PlaylistItemSkeleton />
              </Box>
            ) : (
              <PlaylistItem playlist={item} />
            )}
          </Fade>
        </Grid>
      )
    )
  }

  const handleFilter = input => {
    const filteredItems = filterByText(playlists, input)
    setFiltered(filteredItems)
  }

  return (
    <>
      <PlaylistHeader
        showFilter={playlists.length > 0}
        onFilter={handleFilter}
      />
      <Grid container spacing={2}>
        {renderContent()}
      </Grid>
    </>
  )
}
