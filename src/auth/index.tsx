import * as React from 'react'
import { useSearchParams, Navigate } from 'react-router-dom'
import { Box } from '@chakra-ui/core'

import { useAuth } from 'shared/context/auth'

import { Welcome } from './components/welcome'
import { Authenticating } from './components/authenticating'

export default function NoAuthenticatedScreen() {
  const { openSpotifyAccountLogin, user, authoriseUserCode } = useAuth()
  const [state, setState] = React.useState('indle')
  const [searchParams] = useSearchParams()

  const code = searchParams.get('code')
  const error = searchParams.get('error')

  React.useEffect(() => {
    if (code && !user) {
      setState('authenticating')
      authoriseUserCode(code).then(() => setState('redirect'))
    }
    if (error) {
      console.log('Não foi possivel autenticar')
    }
  }, [code, user, authoriseUserCode, error])

  const handleOpenSpotifyAccountLogin = React.useCallback(() => {
    if (openSpotifyAccountLogin) {
      openSpotifyAccountLogin()
    }
    setState('loading')
  }, [openSpotifyAccountLogin])

  return (
    <Box>
      {state === 'redirect' ? (
        <Navigate to="/playlist" replace={true} />
      ) : state === 'authenticating' ? (
        <Authenticating />
      ) : (
        <Welcome {...{ state, handleOpenSpotifyAccountLogin }} />
      )}
    </Box>
  )
}
