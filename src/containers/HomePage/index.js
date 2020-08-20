/**
 *
 * HomePage
 *
 */

import React from 'react'

import { FULL_AUTHORIZE_URI } from '../../spotifyAuthorizationConfig'
import StyledLink from '../../components/StyledLink'

import { StyledHomePage } from './styles'

export default function HomePage() {
  return (
    <StyledHomePage>
      <div>
        <img src="logo.png" alt="Spotifood" />
      </div>
      <StyledLink href={FULL_AUTHORIZE_URI}>
        Faça Login no Spotify
      </StyledLink>
    </StyledHomePage>
  )
}
