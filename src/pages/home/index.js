import React, { useEffect } from 'react'
import { login } from '../../services/spotify'
import { getSession, isValidSession } from '../../utils/session'

import HomeTemplate from '../../templates/home'

function Home() {
  useEffect(() => {
    const session = getSession()
    if (!isValidSession(session)) {
      login()
    }
  }, [])

  return <HomeTemplate />
}

export default Home
