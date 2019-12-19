import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import { setSession, decodeSession, isValidSession } from '../../utils/session'
import ROUTES from '../../routes'
import { ErrorMessage } from '../../components/error-message'

function Callback() {
  const [error, setError] = useState(false)

  useEffect(() => {
    const session = decodeSession(window.location.hash)
    setSession(session)

    if (!isValidSession(session)) {
      setError(true)
    } else {
      setTimeout(() => Router.push(ROUTES.HOME), 500)
    }
  }, [])

  return error ? <div>Loading...</div> : <ErrorMessage />
}

export default Callback
