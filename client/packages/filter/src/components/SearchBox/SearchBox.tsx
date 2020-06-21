import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { Container, SearchInput, SearchButton } from './styles'
import useSearch from './useSearch'

function SearchBox(): ReactElement {
  const {
    search,
    onSearchChange,
    onSearch
  } = useSearch()

  const theme = useTheme()

  const isMobile = useMediaQuery({ query: `(max-width: ${theme.filter.breakpoints.small})` }) 

  const { t } = useTranslation('filter')

  return (
    <Container>
      <SearchInput
        value={search}
        onChange={onSearchChange}
        placeholder={t('searchforplaylists')}
      />
      {!isMobile && (
        <SearchButton
          primaryColor={theme.filter.color.primary}
          secondaryColor={theme.filter.color.secondary}
          onClick={onSearch}
        >
          {t('search')}
        </SearchButton>
      )}
    </Container>
  )
}


export default SearchBox