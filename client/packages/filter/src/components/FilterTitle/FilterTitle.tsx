import React, { ReactNode, memo, ReactElement } from 'react'
import { StyledTitle } from './styles'

interface FilterTitleProps {
  children: ReactNode;
}

function FilterTitle(props: FilterTitleProps): ReactElement {
  const {
    children
  } = props

  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  )
}

export default memo(FilterTitle)