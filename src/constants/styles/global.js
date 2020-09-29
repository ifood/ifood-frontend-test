import { createGlobalStyle } from "styled-components";

import * as T from "./typography";

export const GlobalStyle = createGlobalStyle`
	* {
    box-sizing: border-box;
		border: none;
		margin: 0;
		padding: 0;
    touch-action: manipulation;
  }

  ul,
  ol {
    list-style: none;
  }
  
  button {
    background: inherit;
    -webkit-appearance: none;
    border-radius: 0;
  }

	html,
  body {
		height: 100%;
  }

	body {
		font-family: ${T.PRIMARY_FONT};
  }
  
	a {
		text-decoration: none;
  }
  
	img {
		max-width: 100%;
	}
`;
