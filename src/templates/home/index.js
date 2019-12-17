import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Search } from '../../components/search'
import { Playlist } from '../../components/playlist'

import '../index.css'

export default function HomeTemplate() {
  return (
    <Grid container spacing={0}>
      <Grid item component='aside' xs={12} md={3} lg={2}>
        <Search />
      </Grid>
      <Grid item md={9} lg={10}>
        <Playlist />
      </Grid>
    </Grid>
  )
}
