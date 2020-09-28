import { createGlobalStyle } from 'styled-components'

import { colors, fonts } from 'styles'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    height: 100%;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: ${colors.gray};
    font-family: ${fonts.montserrat};
    color: ${colors.white};
  }
  button {
    cursor: pointer;
  }
`
