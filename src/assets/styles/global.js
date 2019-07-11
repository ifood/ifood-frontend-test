import { createGlobalStyle, css } from 'styled-components';

const sizes = {
  tablet: 1200,
  phone: 500,
  small: 320,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fff;
    color: #000;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
  }

`;
