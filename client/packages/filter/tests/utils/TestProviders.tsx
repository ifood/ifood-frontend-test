import React, { ReactNode, ReactElement } from 'react'
import CommunicationProvider from '@spotifood/communication-sdk'
import I18nProvider from '@spotifood/internationalization'
import TestThemeProvider from '../utils/TestThemeProvider'

interface TestProvidersProps {
  children: ReactNode;
}

export default function TestProviders(props: TestProvidersProps): ReactElement {
  const {
    children
  } = props

  return (
    <CommunicationProvider>
      <I18nProvider>
        <TestThemeProvider>
          {children}
        </TestThemeProvider>
      </I18nProvider>
    </CommunicationProvider>
  )
}
