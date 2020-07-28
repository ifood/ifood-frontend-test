import { createContext, useState, useEffect, useContext } from 'react'
import { element } from 'prop-types'
import { useRouter } from 'next/router'
import { setUserToken } from '../services/auth'
import qs from 'qs'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const path = router.asPath
    const queryParams = qs.parse(path)
    const accessToken = queryParams['/playlists#access_token']
    setToken(accessToken)
    setUserToken(accessToken)
    setLoading(false)
  }, [router])

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!token, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  const context = useContext(AuthContext)

  return context
}

AuthProvider.propTypes = {
  children: element.isRequired
}
