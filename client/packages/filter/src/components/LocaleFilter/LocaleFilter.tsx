import React, { ReactElement } from 'react'
import { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { ControlOverlay, Tag } from '@spotifood/ui'
import { FilterType } from '../../types'
import { Container } from './styles'
import { FilterTitle } from '../FilterTitle'
import useLocale from './useLocale'

interface LocaleFilterProps {
  filter: FilterType;
}

export default function LocaleFilter(props: LocaleFilterProps): ReactElement {
  const { filter } = props

  const {
    showLocale,
    handleOverlayClose,
    isActive,
    handleDeactivate,
    handleActivate
  } = useLocale()

  const theme = useTheme()

  const { t } = useTranslation('filter')

  return (
    <ControlOverlay
      show={showLocale}
      onClose={handleOverlayClose}
      palette={theme.filter.color}
    >
      <FilterTitle>{t('locales')}</FilterTitle>
      <Container>
        {filter.values.map(locale => {
          const active = isActive(locale)
          const handleClick = active ? handleDeactivate : handleActivate
          return (
            <Tag
              key={locale.value}
              active={active}
              value={locale.value}
              onClick={handleClick}
              hoverPalette={theme.filter.color}
            >
              {locale.name}
            </Tag>
          )
        })}
      </Container>
    </ControlOverlay>
  )
}