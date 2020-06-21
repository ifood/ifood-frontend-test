import React, { memo, ReactElement, ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

interface ProviderProps {
  children: ReactNode;
}

function Provider(props: ProviderProps): ReactElement {
  const {
    children
  } = props
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  )
}

export default memo(Provider)
