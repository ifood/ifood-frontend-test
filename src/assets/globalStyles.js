import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
  html {
    height: 100%;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    height: 100%;
    background-color: ${colors.ligher};
    color: ${colors.dark};
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    letter-spacing: -0.1px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  ::-moz-selection {
    color: ${colors.white};
    background: ${colors.primary};
  }

  ::selection {
    color: ${colors.white};
    background: ${colors.primary};
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: -0.5px;
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  a {
    color: ${colors.primary};
    transition: text-shadow .3s;
  }

  a, button {
    outline: none;
    text-decoration: none;
  }

  button, .button {
    background-color: ${colors.primary};
    color: ${colors.white};
    font-family: 'Inter', sans-serif;
  }

  .button-small {
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.4;
    padding: 4px 11px;
  }

  .button-large {
    border-radius: 28px;
    display: inline-block;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.3;
    padding: 18px 31px;
  }

  button:hover,
  button:focus,
  a:hover,
  a:focus {
    outline: none;
    opacity: 0.85;
  }

  .button:hover {
    -webkit-text-stroke: 0.25px ${colors.white};
  }

  a:hover,
  button:hover,
  button:focus {
    -webkit-transition: all 300ms ease-out;
    -moz-transition: all 300ms ease-out;
    -o-transition: all 300ms ease-out;
    transition: all 300ms ease-out;
  }

  .more::after {
    content: '›';
    padding-left: 4px;
    font-family: 'Inter', sans-serif;
    display: inline-block;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @media screen and (min-width: 990px) {
    .curve:before {
      height: 60px;
      padding: 0;
    }
  }
`;
