import React from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component'
const LandingHero = loadable(() => import('./LandingHero'));
const LandingPitch = loadable(() => import('./LandingPitch'));
const LandingRecs = loadable(() => import('./LandingRecs'));
const LandingServices = loadable(() => import('./LandingServices'));

const Landing = (props) => {
  return (
    <LandingContainer>
      <LandingHero />
      <LandingServices />
      <LandingPitch />
      <LandingRecs />
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