import * as React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Stack, Flex, Heading, Box } from '@chakra-ui/core'
import { useQuery } from 'react-query'

import { client } from 'shared/utils/api'
import { getAcessToken } from 'shared/utils/service-auth'

import { PlayListContainer, PlaylistSkeleton } from './playlist.container'
import FilterContainer from './filter.container'

export function PlayListScreen() {
  const [searchParams] = useSearchParams()
  const { data: filters } = useQuery(['api/filters'], client)

  const token = getAcessToken()
  const params = searchParams.toString()

  return (
    <Stack width="100%" spacing={6}>
      <Flex justifyContent="center" alignItems="center">
        <Heading>Playlist</Heading>
        <Flex justifyContent="center" ml={10}>
          <FilterContainer {...{ filters }} />
        </Flex>
      </Flex>
      <Box>
        <React.Suspense fallback={<PlaylistSkeleton />}>
          <PlayListContainer {...{ params, token }} />
        </React.Suspense>
      </Box>
    </Stack>
  )
}
