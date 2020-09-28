import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    box-sizing: border-box;
    overflow-x: hidden;
  }

   *, *:before, *:after {
      box-sizing: inherit;
   }

  h3, h4, h5 {
    font-family: 'Roboto', sans-serif;
  }

  h1, h2 {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
