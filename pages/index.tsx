import { useState } from 'react'

import { Logo } from '../components/Logo'
import { FilterPlaylists } from '../components/FilterPlaylists'
import { FeaturedPlaylists } from '../components/FeaturedPlaylists'
import { InvalidTokenAlert } from '../components/InvalidTokenAlert'

function Index() {
  const [playlists, setPlaylists] = useState([])
  const [message, setMessage] = useState('')
  const [isTokenInvalid, setIsTokenInvalid] = useState(false)

  return (
    <div className="main">
      <Logo />
      {isTokenInvalid ? (
        <InvalidTokenAlert />
      ) : (
        <>
          <FilterPlaylists
            setPlaylists={setPlaylists}
            setIsTokenInvalid={setIsTokenInvalid}
            setMessage={setMessage}
          />
          <FeaturedPlaylists message={message} playlists={playlists} />
        </>
      )}
    </div>
  )
}

export default Index
