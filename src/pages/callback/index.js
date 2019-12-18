import React, { useEffect } from 'react'
import Router from 'next/router'
import { setSession, decodeSession, isValidSession } from '../../utils/session'
import ROUTES from '../../routes'

function Callback(props) {
  useEffect(() => {
    const session = decodeSession(window.location.hash)

    if (isValidSession(session)) {
      setSession(session)
      Router.push(ROUTES.HOME)
    }
  }, [props])

  return <div>Loading...</div>
}

export default Callback
