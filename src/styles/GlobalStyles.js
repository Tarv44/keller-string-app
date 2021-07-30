import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    --color-bg-grey: #F1F3F4;
    --color-red: #860D0B;
    --color-black: #020300;
  }

  body {
    margin: 0;
    max-width: 100vw;
  }

  button {
    border: none;
    background: none;
  }

  h1 {
    font-family: 'Perpetua';
    font-size: 54px;
    font-weight: bold;
    text-transform: uppercase;
    color: var(---color-red);
  }

  p {
    font-family: 'Libre Franklin';
    font-size: 20px;
    font-weight: medium;
    color: var(---color-black)
  }
`