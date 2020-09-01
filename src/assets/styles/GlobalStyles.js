import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    font-size: 62.5%;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html,
  body,
  #root {
    height: 100vh;
  }

  body {
      background-image:  linear-gradient(90deg, #c074b2, #8ab5e8);
      font-family: sans-serif;
      font-size: 1.6rem;
      
  }
  
`;
