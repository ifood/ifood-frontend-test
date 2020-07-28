import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    scroll-behavior: smooth;
  }

  body {
    font-family: sans-serif;
    overflow-x: hidden;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
    -webkit-text-decoration-skip: objects;
  }

  a:active, a:hover {
    outline-width: 0;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  button, input, select, textarea {
    font: inherit;
  }

  button, input {
    overflow: visible;
  }

  button, select {
    text-transform: none;
  }

  button, html [type='button'], [type='reset'], [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner, [type='button']::-moz-focus-inner, [type='reset']::-moz-focus-inner, [type='submit']::-moz-focus-inner {
    border-style: none;
  }

  button:-moz-focusring, [type='button']:-moz-focusring, [type='reset']:-moz-focusring, [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
`;

export default GlobalStyle;
