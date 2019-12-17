import React, { useEffect } from 'react'
import { login } from '../../services/spotify'
import { isValidSession } from '../../utils/session'

import HomeTemplate from '../../templates/home'

function Home() {
  useEffect(() => {
    if (!isValidSession()) {
      login()
    }
  }, [])

  return <HomeTemplate />
}

export default Home
