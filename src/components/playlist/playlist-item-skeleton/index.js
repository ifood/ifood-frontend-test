import React from 'react'
import Box from '@material-ui/core/Box'
import Skeleton from '@material-ui/lab/Skeleton'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  box: {
    marginBottom: 10
  }
})

export function PlaylistItemSkeleton() {
  const classes = useStyles()

  return (
    <Box className={classes.box}>
      <Skeleton variant='rect' width='100%' height={200} />
      <Skeleton />
      <Skeleton width='60%' />
    </Box>
  )
}
