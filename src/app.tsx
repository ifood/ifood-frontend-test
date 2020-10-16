import * as React from 'react'

import { useAuth } from 'shared/context/auth'
import { Layout } from 'shared/ui/layout'
import { Loader } from 'shared/ui/loader'

const Authenticated = React.lazy(
  () => import(/* webpackPrefetch: true */ './routes')
)
const NoAuthenticatedScreen = React.lazy(() => import('./auth'))

export function App() {
  const { user } = useAuth()

  return (
    <Layout>
      <React.Suspense fallback={<Loader />}>
        {user ? <Authenticated /> : <NoAuthenticatedScreen />}
      </React.Suspense>
    </Layout>
  )
}
