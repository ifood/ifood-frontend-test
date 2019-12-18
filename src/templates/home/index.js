import React from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import { Search } from '../../components/search'
import { Playlist } from '../../components/playlist'

const useStyles = makeStyles({
  box: {
    padding: '1rem'
  }
})

export default function HomeTemplate({ filters }) {
  const classes = useStyles()

  return (
    <Grid container spacing={0}>
      <Grid item component='aside' xs={12} md={3} lg={2}>
        <Box className={classes.box}>
          <Search filters={filters} />
        </Box>
      </Grid>
      <Grid item xs={12} md={9} lg={10}>
        <Box className={classes.box}>
          <Playlist />
        </Box>
      </Grid>
    </Grid>
  )
}
