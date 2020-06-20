import React, { ReactElement } from 'react'
import { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { ControlOverlay } from '@spotifood/ui'
import { FilterType } from '../../types'
import { FilterTitle } from '../FilterTitle'
import useLimit from './useLimit'
import { Container, FilterInput } from './styles'

interface LimitFilterProps {
  filter: FilterType;
}

export default function LimitFilter(props: LimitFilterProps): ReactElement {
  const {
    filter: {
      validation
    }
  } = props

  const {
    showLimit,
    handleClose,
    handleAction,
    limit,
    handleChange,
    errorMessage
  } = useLimit(validation)

  const theme = useTheme()

  const { t } = useTranslation('filter')

  return (
    <ControlOverlay
      show={showLimit}
      onClose={handleClose}
      onAction={handleAction}
      actionButtonText={t('filter')}
      palette={theme.filter.color}
    >
      <FilterTitle>{t('limitbypage')}</FilterTitle>
      <Container>
        <FilterInput
          value={limit}
          onChange={handleChange}
          placeholder={t('playlistsbypage')}
          errorMessage={errorMessage}
        />
      </Container>
    </ControlOverlay>
  )
}