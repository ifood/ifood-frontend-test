import React, { ReactElement, useCallback } from 'react'
import { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
import Bugsnag from '@bugsnag/js'
import { gql, useQuery } from '@apollo/client'
import { ControlOverlay, Tag, ErrorBoundary } from '@spotifood/ui'
import { FilterTitle } from '../FilterTitle'
import useOffset from './useOffset'
import { Loader } from '../Loader'
import { Container } from './styles'

export const GET_PLAYLISTS_TOTAL = gql(`
  {
    playlists {
      total
    }
  }
`)

export default function OffsetFilter(): ReactElement {
  const {
    loading,
    error,
    data,
    refetch
  } = useQuery(GET_PLAYLISTS_TOTAL)

  const {
    showOffset,
    handleClose,
    currentPage,
    pagesNumber,
    handleAction
  } = useOffset(data)

  const theme = useTheme()

  const { t } = useTranslation('filter')

  const onError = useCallback(() => Bugsnag.notify(new Error(error?.message)), [error])
  const onAction = useCallback(() => refetch(), [refetch])

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

  return (
    <ControlOverlay
      show={showOffset}
      onClose={handleClose}
      palette={theme.filter.color}
    >
      <FilterTitle>{t('pagefromto', { from: currentPage, to: pagesNumber })}</FilterTitle>
      <Container>
        {Array(pagesNumber).fill({}).map((_value, index: number) => {
          const page = index + 1
          return (
            <Tag
              active={page === currentPage}
              key={index}
              value={page}
              onClick={handleAction}
              hoverPalette={theme.filter.color}
            >
              {page}
            </Tag>
          )
        })}
      </Container>
    </ControlOverlay>
  )
}