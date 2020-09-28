import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

import { Container } from './styles'

const SkeletonElement = () => (
  <Container>
    <Skeleton
      animation='wave'
      variant='rect'
      height={250}
      width={250}
      style={{ marginBottom: 6 }}
    />
    <Skeleton
      animation='wave'
      height={40}
      style={{ marginBottom: 6 }}
      width={250}
    />
    <Skeleton animation='wave' height={30} width={150} />
  </Container>
)

const PlaylistSkeleton = () => (
  <>
    <SkeletonElement />
    <SkeletonElement />
    <SkeletonElement />
    <SkeletonElement />
    <SkeletonElement />
    <SkeletonElement />
    <SkeletonElement />
    <SkeletonElement />
    <SkeletonElement />
  </>
)

export default PlaylistSkeleton
