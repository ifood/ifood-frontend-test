import * as React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider, CSSReset } from '@chakra-ui/core'
import {
  ReactQueryConfigProvider,
  ReactQueryErrorResetBoundary
} from 'react-query'

import { theme } from '../styles/theme'

import { AuthProvider } from './auth'

const queryConfig = {
  shared: {
    suspense: true,
    refetchOnWindowFocus: false
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <ReactQueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({
              resetErrorBoundary
            }: {
              resetErrorBoundary: () => void
            }) => (
              <div role="alert">
                <h1>Ocorreu um erro ao carregar o aplicativo</h1>
                <button onClick={() => resetErrorBoundary()}>
                  Tentar novamente
                </button>
              </div>
            )}
          >
            <React.Suspense fallback={<div>loading</div>}>
              <Router>
                <ChakraProvider theme={theme}>
                  <CSSReset />
                  <AuthProvider>{children}</AuthProvider>
                </ChakraProvider>
              </Router>
            </React.Suspense>
          </ErrorBoundary>
        )}
      </ReactQueryErrorResetBoundary>
    </ReactQueryConfigProvider>
  )
}
