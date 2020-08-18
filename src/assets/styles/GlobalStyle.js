import { createGlobalStyle } from 'styled-components'
import { colors, mediaQueries } from './default-style'

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, 
  blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, 
  em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, 
  b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, 
  caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  
  body {
    background-color: ${colors.purple};
    color: white;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
  }

  * {
    box-sizing: border-box;
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  h1, h2, h3 {
    font-family: sans-serif;
    font-weight: bold;
  }

  h1 {
    font-size: 1.75rem;
    @media (min-width: ${mediaQueries.tablet.min}px) {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 1.25rem;
    @media (min-width: ${mediaQueries.tablet.min}px) {
      font-size: 1.75rem;
    }
  }

  h3 {
    font-size: 1.15rem;
    @media (min-width: ${mediaQueries.tablet.min}px) {
      font-size: 1.5rem;
    }
  }

  p {
    line-height: 1.25;
  }

  a:visited,
  a:active {
    color: inherit;
  }

  a {
    text-decoration: none;
  }

  strong {
    font-weight: 700;
  }

  small {
    font-size: 0.875rem;
  }

  ul {
    list-style: none;
  }
`

export default GlobalStyle
