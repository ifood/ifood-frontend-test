import React, { ReactElement } from 'react'
import { useTheme } from 'styled-components'
import { ControlOverlay, Tag } from '@spotifood/ui'
import { FilterType } from '../../types'
import { Container } from './styles'
import { FilterTitle } from '../FilterTitle'
import useCountry from './useCountry'
import { useTranslation } from 'react-i18next'

interface CountryFilterProps {
  filter: FilterType;
}

export default function CountryFilter(props: CountryFilterProps): ReactElement {
  const {
    filter
  } = props

  const {
    showCountry,
    handleOverlayClose,
    handleOverlayAction,
    isActive,
    handleDeactivate,
    handleActivate
  } = useCountry()

  const theme = useTheme()

  const { t } = useTranslation('filter')

  return (
    <ControlOverlay
      show={showCountry}
      onClose={handleOverlayClose}
      onAction={handleOverlayAction}
      actionButtonText={t('filter')}
      palette={theme.filter.color}
    >
      <FilterTitle>{t('country')}</FilterTitle>
      <Container>
        {filter.values.map(country => {
          const active = isActive(country)
          const handleClick = active ? handleDeactivate : handleActivate
          return (
            <Tag
              key={country.value}
              active={active}
              value={country.value}
              onClick={handleClick}
              hoverPalette={theme.filter.color}
            >
              {country.name}
            </Tag>
          )
        })}
      </Container>
    </ControlOverlay>
  )
}