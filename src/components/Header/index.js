/**
 *
 * Header
 *
 */

import React from 'react'
import { Link } from 'react-router-dom'

import { StyledHeader } from './styles'

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <img src="logo.png" alt="Spotifood" />
      </Link>
    </StyledHeader>
  )
}
