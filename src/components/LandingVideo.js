import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const LandingVideo = (props) => {
  const data = useStaticQuery(graphql`
    query PlaceholderQuery {
      contentfulLandingVideo {
        image {
          fluid {
            src
            srcSet
            srcSetWebp
            srcWebp
          }
        }
      }
    }
  `)
  const [isLoaded, setIsLoaded] = useState(false)
  const image = data.contentfulLandingVideo.image.fluid
  return (
    <>
      {!isLoaded && (
        <Placeholder 
          onClick={() => setIsLoaded(true)}
          width={343}
          height={225.5}
          src={image.src} 
          srcSet={`${image.srcSetWebp} ${image.srcSet}`} 
          alt={'Introduction video'} />
      )}
      {isLoaded && <Iframe 
      src="https://www.youtube.com/embed/lbMAGW6n2ic"
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen />}
    </>
  );
};

export default LandingVideo;

const Iframe = styled.iframe`
  height: 225.5px;
  width: 343px;
  @media screen and (min-width: 481px) {
    height: 294.7px;
    width: 448px;
  }
  @media screen and (min-width: 768px) {
    width: 678px;
    height: 446px;
  }
  @media screen and (min-width: 1025px) {
    width: 925px;
    height: 608.5px;
  }
  @media screen and (min-width: 1200px) {
    width: 1000px;
    height: 657.9px;
  }
  @media screen and (min-width: 1440px) {
    width: 1240px;
    height: 815.8px;
  }
`

const Placeholder = styled.img`
  height: auto;
  width: 343px;
  @media screen and (min-width: 481px) {
    width: 448px;
  }
  @media screen and (min-width: 768px) {
    width: 678px;
  }
  @media screen and (min-width: 1025px) {
    width: 925px;
  }
  @media screen and (min-width: 1200px) {
    width: 1000px;
  }
  @media screen and (min-width: 1440px) {
    width: 1240px;
  }
`