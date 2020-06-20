import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    font-family: 'Nunito', sans-serif;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    > div {
      height: 100%;
    }
  }
`
