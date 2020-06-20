import React from 'react'
import { ErrorBoundary } from '../src'

export default { title: 'ErrorBoundary' }

export const standard = () => (
  <ErrorBoundary
    buttonText="Retry"
    onAction={() => console.log('retry!')}
    onError={() => console.log('Log error')}
  >
    Something went wrong =( Please try againg or come back later.
  </ErrorBoundary>
)
