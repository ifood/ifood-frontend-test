import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background-color: #202040;
    padding: 2rem;
  }

  body, input, button{
    font: 16px 'Roboto Slab', sans-serif;
  }

  button{
    cursor: pointer;
  }
`;
