import React from 'react';
import styled from 'styled-components';
import LandingHero from './LandingHero';
import LandingServices from './LandingServices';

const Landing = (props) => {
  return (
    <LandingContainer>
      <LandingHero />
      <LandingServices />
    </LandingContainer>
  );
};
export default Landing;

const LandingContainer = styled.div`
  @media (min-width: 481px) {}
  @media (min-width: 768px) {
    padding: 25px 30px 100px;
  }
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {
    padding: 50px 100px 150px;
  }
`