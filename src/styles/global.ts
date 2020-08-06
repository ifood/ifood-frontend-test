import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
  }

  body {
      background: #171717;
      color: #ffffff;
      -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 20px;
  }

  h1, h2, h3, h4, h5, h6 {
      font-family: "Helvetica", "Arial", sans-serif;
  }
  strong {
    font-weight: 500;
  }

  button {
      cursor: pointer;
  }

`;
