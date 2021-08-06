import { createGlobalStyle } from "styled-components";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    --color-primary: #860D0B;
    --color-acc-tan: #DDB99E;
    --color-acc-olive: #9C9E93;
    --color-grey-1: #F1F3F4;
    --color-grey-2: #DDE0E3;
    --color-grey-3: #76828E;
    --color-grey-4: #434C54;
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

  a {
    text-decoration: none;
    color: #000000;
  }

  h1 {
    font-family: 'Pepetua', serif;
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--color-primary);
  }

  h2 {
    font-family: 'Perpetua';
    font-size: 42px;
    font-weight: 700;
    color: var(--color-black);
  }

  h3 {
    font-family: 'Libre Franklin';
    font-size: 28px;
    font-weight: 500;
  }

  p, li {
    font-family: 'Libre Franklin';
    font-size: 16px;
    font-weight: 400;
    color: var(--color-black)
  }

  ul, ol {
    list-style: none;
  }

  .slick-dots {
    bottom: -30px;
  }

  .slick-dots li {
    width: 2px;
  }

  .slick-dots li button:before {
    font-size: 8px;
    opacity: 7%;
  }

  .slick-dots li.slick-active button:before {
    opacity: 25%;
    /* color: black; */
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 45px;
    }

    p {
      font-size: 20px;
    }

    .slick-dots li button:before {
      font-size: 11px;
    }
    .slick-dots li {
      width: 7px;
    }
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 54px;
    }

    .slick-dots {
      bottom: -45px;
    }

    .slick-dots li button:before {
      font-size: 18px;
    }
    .slick-dots li {
      width: 15px;
    }
  }
`



