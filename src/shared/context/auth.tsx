import * as React from 'react'

import {
  authoriseApplication,
  getCodeSpotify,
  getAcessToken,
  getUser
} from 'shared/utils/service-auth'

import { useAsync } from 'shared/hooks/useAsync'
import { User } from 'shared/types/auth'
import { Loader } from 'shared/ui/loader'

type ContextProvider = {
  children: React.ReactNode
}

type ContextProps = {
  authoriseUserCode: (userCode: string) => Promise<void>
  openSpotifyAccountLogin: () => void
  user?: User
}

const AuthContext = React.createContext({} as ContextProps)
AuthContext.displayName = 'AuthContext'

async function init() {
  let user
  let token
  try {
    token = await getAcessToken()
    if (token) {
      const data = await getUser(token)
      user = data
    }
  } catch (error) {
    token = null
  }
  return user
}

function AuthProvider({ children }: ContextProvider) {
  const {
    data: user,
    status,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    run,
    setData
  } = useAsync()

  React.useEffect(() => {
    const initPromise = init()
    run(initPromise)
  }, [run])

  const authoriseUserCode = React.useCallback(
    (userCode: string) =>
      authoriseApplication(userCode).then((data) => setData(data)),
    [setData]
  )

  const openSpotifyAccountLogin = React.useCallback(() => getCodeSpotify(), [])

  const value = React.useMemo(
    () => ({ user, authoriseUserCode, openSpotifyAccountLogin }),
    [user, authoriseUserCode, openSpotifyAccountLogin]
  )

  if (isLoading || isIdle) {
    return <Loader wrapComponent={true} />
  }

  if (isError) {
    return <div>{error}</div>
  }

  if (isSuccess) {
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  }

  throw new Error(`Unhandled status: ${status}`)
}

export default function useAuth() {
  const context = React.useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context as ContextProps
}

export { AuthProvider, useAuth }
