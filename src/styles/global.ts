import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #FFFFFF;
    color: #000000;
    -webkit-font-smoothing: antialised;
  }

  body, input, button {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: bold;
  }
`;
