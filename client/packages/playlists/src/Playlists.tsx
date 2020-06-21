import React, { ReactElement, useCallback } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useQuery, gql } from '@apollo/client'
import { ErrorBoundary } from '@spotifood/ui'
import { PlaylistBox, Loader } from './components'
import { PlaylistType } from './types'
import { GlobalConstants, logOnBugsnag } from './utils'

export const GET_PLAYLISTS = gql(`
  query playlists(
    $search: String,
    $limit: Int,
    $offset: Int,
    $countries: [String]
  ) {
    playlists(
      search: $search,
      limit: $limit,
      offset: $offset
    ) {
      total
      items {
        id
        name
        description
        images {
          url
        }
        externalLinks {
          spotify
        }
        tracks(limit: 4, markets: $countries) {
          id
          name
          duration
          album {
            id
            name
            externalLinks {
              spotify
            }
            images {
              url
            }
          }
          duration
          artists {
            id
            name
          }
        }
      }
    }
  }
`)

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const PlaylistsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > div {
    margin: 0 15px 15px 0;
    @media (max-width: ${({ theme }) => theme.playlists.breakpoints.small}) {
      margin: 0 0 15px 0;
    }
  }
`

interface PlaylistsProps {
  search?: string;
  countries?: string[];
  limit?: number;
  offset?: number;
  logError?: (error: Error) => void;
}

export function Playlists(props: PlaylistsProps): ReactElement {
  const {
    logError = logOnBugsnag,
    search,
    limit,
    offset,
    countries
  } = props

  const {
    loading,
    error,
    data,
    refetch
  } = useQuery(
    GET_PLAYLISTS,
    {
      variables: { search, limit, offset, countries },
      pollInterval: GlobalConstants.refetchInterval
    }
  )

  const onError = useCallback(() => {
    if (error) {
      logError(error)
    }
  }, [error, logError])
  const onAction = useCallback(() => refetch(), [refetch])

  const { t } = useTranslation('playlists')

  if (loading) return <Loader />
  if (error) return (
    <ErrorBoundary
      buttonText={t('retry')}
      onAction={onAction}
      onError={onError}
    >
      {t('errorboudaryfetch')}
    </ErrorBoundary>
  )

  const { items } = data.playlists

  return (
    <Container>
      <PlaylistsContainer>
        {items.map((item: PlaylistType) => (
          <PlaylistBox
            key={item.id}
            playlist={item}
          />
        ))}
      </PlaylistsContainer>
    </Container>
  )
}
