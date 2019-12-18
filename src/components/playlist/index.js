import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Skeleton from '@material-ui/lab/Skeleton'

import { PlaylistHeader } from './playlist-header'
import { PlaylistItem } from './playlist-item'
import { filterByText } from '../../utils/filter-by-text'

export function Playlist() {
  const [filtered, setFiltered] = useState([])
  const { playlists, loading, error } = useSelector(state => state.playlists)

  const renderContent = () => {
    if (error) {
      return (
        <div>
          <h3>{error.message}</h3>
        </div>
      )
    }

    if (!loading && !playlists.length) {
      return <div>Nenhuma playlist encontrada</div>
    }

    const visibleList = filtered.length ? filtered : playlists

    return (loading ? Array.from(new Array(6)) : visibleList).map(
      (item, index) => (
        <Grid key={item ? item.id : index} item xs={12} md={3} xl={2}>
          {!item ? (
            <Box pt={0.5} mr={2}>
              <Skeleton variant='rect' width='100%' height={118} />
              <Skeleton />
              <Skeleton width='60%' />
            </Box>
          ) : (
            <Box pr={2}>
              <PlaylistItem playlist={item} />
            </Box>
          )}
        </Grid>
      )
    )
  }

  const handleFilter = input => {
    const filteredItems = filterByText(playlists, input)
    setFiltered(filteredItems)
    console.log({ filtered })
  }

  return (
    <>
      <PlaylistHeader
        showFilter={playlists.length > 0}
        onFilter={handleFilter}
      />
      <Grid container>{renderContent()}</Grid>
    </>
  )
}
