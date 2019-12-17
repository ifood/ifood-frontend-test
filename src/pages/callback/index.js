import React, { useEffect } from 'react'
import { setSession, decodeSession } from '../../utils/session'
import ROUTES from '../../routes'

function Callback(props) {
  useEffect(() => {
    const session = decodeSession(window.location.hash)
    setSession(session)

    // TODO: redirect and clear params from url
    window.location.pathname = ROUTES.HOME
  }, [props])

  return <div>Loading...</div>
}

export default Callback
