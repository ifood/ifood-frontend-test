import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const primary = '#B5D99C';
export const background = '#F5F7DC';
export const accent = 'E65F5C';
export const black = '#212429';
export const white = '#ffffff';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        -webkit-font-smoothing: antialiased;
        background: ${background};
        color: ${black};
    }
    h1, h2, h3, h4, h5 {
        font-family: 'Lato', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; ;
        font-weight:400;
        color: ${black};
    }
    body, button, input, p {
        font-family: 'Lato', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    button, a {
        cursor: pointer;
        text-decoration: none;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;
