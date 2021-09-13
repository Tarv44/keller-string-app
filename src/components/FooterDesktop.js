import React from 'react';
import styled from 'styled-components';

const FooterDesktop = (props) => {
  return (
    <Desktop><h1>FooterDesktop</h1></Desktop>
  );
};
export default FooterDesktop;

const Desktop = styled.div`
  display: none;
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {}
`