import React, { memo, ReactElement, ReactNode, useMemo } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

export interface ThemeProviderProps {
  children: ReactNode;
}

function TestThemeProvider(props: ThemeProviderProps): ReactElement {
  const {
    children
  } = props

  const theme = useMemo((): DefaultTheme => ({
    filter: {
      color: {
        primary: "#ea1d2c",
        secondary: "#ffffff"
      },
      breakpoints: {
        small:'768px',
        medium: '960px',
        large: '1170px'
      }
    },
    playlists: {
      color: {
        primary: "#ea1d2c",
        secondary: "#ffffff"
      },
      breakpoints: {
        small:'768px',
        medium: '960px',
        large: '1170px'
      }
    }
  }), [])

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default memo(TestThemeProvider)
