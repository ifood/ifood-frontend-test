import { createGlobalStyle } from "styled-components";

import Gilroy from "../assets/fonts/Gilroy-Bold.woff";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Gilroy';
  src: url('${Gilroy}') format('woff');
}

  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  *:focus, 
  *:active {
    outline: 0;
  }

  :root {
    --red: #ea1d2c;
    --red-rbg: rgb(234 29 44 / 40%);
    --red-gradient: linear-gradient(90deg,#ea1d2c 0,#c72934  50%,#ea1d2c);
    --black: #0f0f0f;
    --black-light: #1e1e1e;
    --black-rbg: rgb(15 15 15 / 92%);
    --gray: #626262;
    --white: #dcdcdc;

    --font-size-default: 1.6rem;
    --font-family-default: 'Heebo';
    --font-family-gilroy: 'Gilroy';
  }

  ::-webkit-scrollbar-track {
    border-radius: 0.3rem;
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 0.3rem;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.3rem;
    background-color: var(--red);
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: var(--font-family-default);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: var(--font-size-default);
    background: var(--black);
    color: var(--gray);
    overflow-y: scroll;
  }

  button {
    font: inherit;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    line-height: normal;
    appearance: none;
    color: inherit;
    border: none;
    background: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  span, a {
    transition: color .7s cubic-bezier(.5,0,0,1);
  }
`;

export default GlobalStyle;
