import React from 'react';
import Logo from '../images/footer-logo.png';
import Logo2x from '../images/footer-logo@2x.png';
import Twitter from '../images/twitter-icon.svg';
import Instagram from '../images/instagram-icon.svg';
import Facebook from '../images/facebook-icon.svg';
import styled from 'styled-components';

const FooterStoreDetails = (props) => {
  return (
    <Details>
      <img
        src={Logo}
        srcSet={`
          ${Logo} 200w,
          ${Logo2x} 400w
        `}
        width={200}
        height={135}
        alt={'Keller String logo'}
      />
      <div>
        <p>140 W Harrison Ave NOLA</p>
        <p>504 - 265 - 0530</p>
        <p>info@kellerstrings.com</p>
        <p>Tu - Thu 11a - 4p </p>
        <p>Fri - Sat 12p - 4p</p>
      </div>
      <Socials>
        <a>
          <img width={40} height={40} src={Instagram} alt={'Instagram icon'} />
        </a>
        <a>
          <img width={40} height={40} src={Facebook} alt={'Facebook icon'} />
        </a>
        <a>
          <img width={40} height={40} src={Twitter} alt={'Twitter icon'} />
        </a>
      </Socials>
    </Details>
  );
};
export default FooterStoreDetails;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    margin-bottom: 20px;
  }
  > *:last-child {
    margin-bottom: 0;
  }
  p {
    font-size: 18px;
    line-height: 28px;
    color: var(--color-black);
  }
  @media (min-width: 481px) {}
  @media (min-width: 768px) {
    margin-right: 62px;
    p {
      font-size: 16px;
    }
  }
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {
    margin-right: 51px;
    p {
      font-size: 18px;
    }
    > img {
      width: 273px;
      height: auto;
    }
  }
`

const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > * {
    margin-right: 15px;
  }
  > *:last-child {
    margin-right: 0;
  }
  @media (min-width: 481px) {}
  @media (min-width: 768px) {
    > * {
      margin-right: 5px;
    }
  }
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {
    > * {
      margin-right: 0;
    }
  }
`