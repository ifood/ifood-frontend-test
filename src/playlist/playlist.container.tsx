import * as React from 'react'
import { Skeleton, Stack } from '@chakra-ui/core'
import { useQuery } from 'react-query'

import { PlaylistRoot } from 'shared/types/playlist'
import * as auth from 'shared/utils/service-auth'

import CardList from './components/playlist/card-list'

export function PlaylistSkeleton() {
  return (
    <Stack isInline px={3} spacing={8} role="alert" aria-busy="true">
      <Skeleton width={300} height={300} />
      <Skeleton width={300} height={300} />
      <Skeleton width={300} height={300} />
    </Stack>
  )
}

export function PlayListContainer({
  params,
  token
}: {
  params: string
  token: string
}) {
  const { data } = useQuery(['playlist', token, params], auth.playlist, {
    refetchInterval: 30000
  }) as {
    data: PlaylistRoot
  }

  return <CardList {...{ data }} />
}
