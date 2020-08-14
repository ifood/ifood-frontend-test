import { useState } from 'react'

import { SpotifoodLogo } from '../components/SpotifoodLogo'
import { FilterPlaylists } from '../components/FilterPlaylists'
import { FeaturedPlaylists } from '../components/FeaturedPlaylists'
import { InvalidTokenAlert } from '../components/InvalidTokenAlert'
import { Divider } from 'antd'

function Index() {
  const [playlists, setPlaylists] = useState([])
  const [message, setMessage] = useState('')
  const [isTokenInvalid, setIsTokenInvalid] = useState(false)

  return (
    <div className="main">
      <SpotifoodLogo />
      {isTokenInvalid ? (
        <InvalidTokenAlert />
      ) : (
        <>
          <FilterPlaylists
            setPlaylists={setPlaylists}
            setIsTokenInvalid={setIsTokenInvalid}
            setMessage={setMessage}
          />
          <Divider />
          <FeaturedPlaylists message={message} playlists={playlists} />
        </>
      )}
    </div>
  )
}

export default Index
