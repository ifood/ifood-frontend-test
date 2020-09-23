import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --primary: #c2121f;
    --secondary: #C7121E;
    --white: #FFF;
    --text: #7A3035;
    --hover: #FB626C;
    --loading: rgba(255, 255, 255, 0.6);
    --background-light: #F5F3F4;
    --border-light: rgba(255, 255, 255, 0.22);
    --black-rgba: rgba(0, 0, 0, 0.4);
    --blue-rgba: rgba(54, 141, 255, 0.1);
  }
  * {
    margin: 0;
    padding: 0;
  }
  html, body {
    max-width: 100vw;
    max-height: 100vw;
    width: 100%;
    font-family: "SulSans", Helvetica, sans-serif;
    background: var(--background-light);
  }
  *, button, input {
    border: 0;
    background: 0;
  }
  a {
    text-decoration: none !important;
  }
`
