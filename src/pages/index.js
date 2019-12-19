import React, { useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import { login } from '../services/spotify'
import { getSession, isValidSession } from '../utils/session'
import { url } from '../services/form-filters'

import HomeTemplate from '../templates/home'

function Home({ filters }) {
  useEffect(() => {
    const session = getSession()

    if (!isValidSession(session)) {
      login()
    }
  }, [])

  return <HomeTemplate filters={filters} />
}

Home.getInitialProps = async () => {
  const res = await fetch(url)
  const { filters } = await res.json()
  return { filters }
}

export default Home
