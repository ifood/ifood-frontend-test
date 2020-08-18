/**
 *
 * HomePage
 *
 */

import React from 'react'

import { FULL_AUTHORIZE_URI } from '../../spotifyAuthorizationConfig'
import StyledLink from '../../components/StyledLink'

export default function HomePage() {
  return (
    <div>
      <StyledLink href={FULL_AUTHORIZE_URI}>
        Faça Login no Spotify
      </StyledLink>
      <div id="xablau">

      </div>
    </div>
  )
}
