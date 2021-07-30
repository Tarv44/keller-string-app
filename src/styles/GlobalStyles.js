import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    --color-red: #860D0B;
  }

  body {
    margin: 0;
    max-width: 100vw;
  }

  button {
    border: none;
    background: white;
  }
`