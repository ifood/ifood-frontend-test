import { createGlobalStyle } from 'styled-components';
import spotifyLogo from '../assets/filled_logo.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: linear-gradient(rgb(88, 43, 218, 0.9), rgb(129, 96, 227)),
        url(${spotifyLogo}) no-repeat 80% top;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }

  body, input, button {
    font-family: 'Archivo Black', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 900;
  }

  #root {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    z-index: 1;
  }

  button {
    cursor: pointer;
  }
`;
