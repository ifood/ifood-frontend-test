import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

const SkeletonElement = () => (
  <Skeleton
    animation='wave'
    height={30}
    width={150}
    style={{ marginBottom: 6 }}
  />
)

const filterSkeleton = () => (
  <>
    <SkeletonElement />
    <SkeletonElement />
    <SkeletonElement />
  </>
)

export default filterSkeleton
