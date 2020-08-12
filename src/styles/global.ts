import { createGlobalStyle, keyframes } from "styled-components";

const appearFromTop = keyframes`
from {
  opacity: 0;
  transform: translateY(-30px);
}
to {
  opacity: 1;
  transform: translateY(0)
}

`;

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
  }

  body {
      /* background: #171717; */
      background: linear-gradient(#363636, #171717, #171717) no-repeat;
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

  .appear-from-top {
    animation: ${appearFromTop} 1s;
  }

`;


