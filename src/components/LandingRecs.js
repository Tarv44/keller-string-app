import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';
import { useStaticQuery, graphql } from "gatsby";
import Button from './styled/Button';

const LandingRecs = (props) => {
  const data = useStaticQuery(graphql`
    query ShopQuery {
      contentfulHomePageRecommendations {
        recommendationOne {
          title
          desc
          image {
            file {
              url
            }
          }
          link
        }
        recommendationTwo {
          title
          link
          desc
          image {
            file {
              url
            }
          }
        }
        recommendationThree {
          title
          link
          desc
          image {
            file {
              url
            }
          }
        }
      }
    }
  `)

  const cards = Object.values(data.contentfulHomePageRecommendations).map((r, i) => {
    return (
      <Card key={i}>
        <h3>{r.title}</h3>
        <img src={r.image.file.url}/>
        <p>{r.desc}</p>
        <Button>Learn More</Button>
      </Card>
    )
  })
  return (
    <Recs>
      <h2>What We Like Right Now</h2>
      <CarouselContainer>
        <Carousel cards={cards}/>
      </CarouselContainer>
    </Recs>
  );
};

export default LandingRecs;

const Recs = styled.div`
  
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {}
`

const CarouselContainer = styled.div`
  
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {}
`

const Card = styled.div`
  max-width: 250px;
  img {
    max-width: 100%;
  }
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {}
`