import React, { ReactElement, memo, Fragment } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Container, SearchContainer, FiltersContainer, MobileBar } from './styles'
import { useTheme } from 'styled-components'

function Loader(): ReactElement {
  const theme = useTheme()
  const isMobile = useMediaQuery({ query: `(max-width: ${theme.filter.breakpoints.small})` })
  return (
    <Container data-testid="FiltersLoader">
      {isMobile ? (
        <MobileBar />
      ) : (
        <Fragment>
          <SearchContainer>
            <div />
            <div />
          </SearchContainer>
          <FiltersContainer>
            <div />
            <div />
            <div />
            <div />
            <div />
          </FiltersContainer>
        </Fragment>
      )}
    </Container>
  )
}

export default memo(Loader)