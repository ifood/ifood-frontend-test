import React, { ReactElement } from 'react'
import { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { ControlOverlay, Button } from '@spotifood/ui'
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
      palette={theme.filter.color}
      actionButton={
        <Button
          title={t('filterlimittitle')}
          primaryColor={theme.filter.color.primary}
          secondaryColor={theme.filter.color.secondary}
          onClick={handleAction}
        >
          {t('filter')}
        </Button>
      }
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