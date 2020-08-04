import React, { useState } from 'react'
import { IntlProvider } from 'react-intl'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import Theme from './styles/theme'
import Svgs from './components/svgs'
import Lenguages from './lang'

import Router from './pages/router'

function App () {
  const Language = navigator.language.split(/[-_]/)[0]
  const [locale, setLocale] = useState(Language)

  const handlerLanguage = (lang) => setLocale(lang.split(/[-_]/)[0])

  return (
    <IntlProvider
      locale={locale}
      messages={Lenguages[locale]}
      formats={Lenguages[locale].formats}
      defaultFormats={Lenguages[locale].formats}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Svgs />
        <Router handlerLanguage={handlerLanguage} />
      </ThemeProvider>
    </IntlProvider>
  )
}

export default App
