import React, { ReactElement, memo } from 'react'
import styled from 'styled-components'
import Logo from './Logo'

interface HeaderProps {
  className?: string;
}

function Header(props: HeaderProps): ReactElement {
  const {
    className
  } = props
  return (
    <div className={className}>
      <Logo />
    </div>
  )
}

const StyledHeader = styled(Header)`
  width: 100%;
  padding: 20px;
  color: ${({ theme }) => theme.shell.color.primary};
  background-color: ${({ theme }) => theme.shell.color.secondary};
  box-shadow: 0 4px 2px -2px lightgray;
  box-sizing: border-box;
`

export default memo(StyledHeader)
