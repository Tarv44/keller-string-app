import React from 'react';
import styled from 'styled-components';

const LandingVideo = (props) => {
  return (
    <Iframe src="https://www.youtube.com/embed/lbMAGW6n2ic" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
  );
};

export default LandingVideo;

const Iframe = styled.iframe`
  width: 100%;
  height: 216px;
  @media (min-width: 481px) {
    height: 326.75px;
  }
  @media (min-width: 768px) {
    height: 437.5px;
  }
  @media (min-width: 1025px) {
    height: 568.75px;
  }
  @media (min-width: 1200px) {
    height: 700px;
  }
`