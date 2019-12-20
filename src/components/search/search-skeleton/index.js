import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = makeStyles({
  skeleton: {
    width: '100%',
    height: 45,
    marginBottom: 10
  }
})

export function SearchSkeleton() {
  const classes = useStyles()

  return (
    <div>
      <Skeleton className={classes.skeleton} variant='rect' />
      <Skeleton className={classes.skeleton} variant='rect' />
      <Skeleton className={classes.skeleton} variant='rect' />
      <Skeleton className={classes.skeleton} variant='rect' />
      <Skeleton className={classes.skeleton} variant='rect' />
    </div>
  )
}
