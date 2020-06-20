import React, { memo, ReactElement, ReactNode, useMemo } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import { Colors, Breakpoints } from './CommonTheme'

export interface DefaultThemeProviderProps {
  children: ReactNode;
}

function DefaultThemeProvider(props: DefaultThemeProviderProps): ReactElement {
  const {
    children
  } = props

  const theme = useMemo((): DefaultTheme => ({
    shell: {
      color: Colors,
      breakpoints: Breakpoints
    },
    filter: {
      color: Colors,
      breakpoints: Breakpoints
    },
    playlists: {
      color: Colors,
      breakpoints: Breakpoints
    }
  }), [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default memo(DefaultThemeProvider)
