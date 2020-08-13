import { useState } from 'react'

import { Logo } from '../components/Logo'
import { FilterPlaylists } from '../components/FilterPlaylists'
import { FeaturedPlaylists } from '../components/FeaturedPlaylists'
import { InvalidTokenAlert } from '../components/InvalidTokenAlert'

export type InvalidToken = {
  isInvalid: boolean
  message: string
}

function Index() {
  const [playlists, setPlaylists] = useState([])
  const [invalidTokenError, setInvalidTokenError] = useState<InvalidToken>({
    isInvalid: false,
    message: '',
  })

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}
    >
      <Logo />

      {invalidTokenError.isInvalid ? (
        <InvalidTokenAlert message={invalidTokenError.message} />
      ) : (
        <>
          <FilterPlaylists
            setPlaylists={setPlaylists}
            setInvalidTokenError={setInvalidTokenError}
          />
          <FeaturedPlaylists playlists={playlists} />
        </>
      )}
    </div>
  )
}

export default Index
