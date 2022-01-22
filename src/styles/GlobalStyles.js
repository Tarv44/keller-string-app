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
    text-align: center
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
    font-size: 26px;
    font-weight: 700;
    color: var(--color-black);
  }

  h3 {
    font-family: 'Libre Franklin';
    font-size: 18px;
    font-weight: 500;
  }

  h4 {
    font-family: 'Perpetua';
    font-size: 24px;
    font-weight: 700;
    color: var(--color-black);
  }

  p, li {
    font-family: 'Libre Franklin';
    font-size: 16px;
    font-weight: 400;
    color: var(--color-black);
    line-height: 22px;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

 .slick-slider {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  } 

  .slick-slide[style="width: 0px;"] {
    width: calc(100vw - 163px) !important;
  }

  .slick-slide > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-list {
    margin-bottom: 15px;
    width: 100%;
  }
  
  /* .slick-dots {
    position: static;
    width: 100%;
  } */

  .slick-dots li {
    width: 2px;
  }
  .slick-dots li button {
    width: 100%;
  }

  .slick-dots li button:before {
    font-size: 8px;
    opacity: 7%;
    width: 100%;
  }

  .slick-dots li.slick-active button:before {
    opacity: 25%;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 45px;
    }

    h2 {
      font-size: 32px;
    }

    h3 {
      font-size: 22px;
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

  @media screen and (min-width: 1200px) {
    h1 {
      font-size: 54px;
    }

    h2 {
      font-size: 42px;
    }

    h3 {
      font-size: 28px;
    }

    h4 {
      font-size: 35px;
    }

    slick-list {
      margin-bottom: 25px;
    }

    .slick-dots li button:before {
      font-size: 18px;
    }
    .slick-dots li {
      width: 15px;
    }
  }
`;
