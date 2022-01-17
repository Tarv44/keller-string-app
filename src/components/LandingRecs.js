import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Carousel from "./Carousel";
import Hr from "./styled/Hr";
import Button from "./styled/Button";

const LandingRecs = (props) => {
  const data = useStaticQuery(graphql`
    query RecsQuery {
      contentfulHomePageRecommendations {
        recommendationOne {
          title
          desc
          image {
            fluid {
              srcWebp
              srcSetWebp
              src
              srcSet
            }
          }
          link
        }
        recommendationTwo {
          title
          link
          desc
          image {
            fluid {
              srcWebp
              srcSetWebp
              src
              srcSet
            }
          }
        }
        recommendationThree {
          title
          link
          desc
          image {
            fluid {
              srcSetWebp
              src
              srcSet
            }
          }
        }
      }
    }
  `);

  const cards = Object.values(data.contentfulHomePageRecommendations).map(
    (r, i) => {
      return (
        <Card key={i}>
          <div>
            <picture>
              <source srcSet={r.image.fluid.srcSetWebp} type="image/webp" />
              <source srcSet={r.image.fluid.srcSet} type="image/png" />
              <img
                width={250}
                height={250}
                src={r.image.fluid.src}
                alt={r.title}
              />
            </picture>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </div>
          <Button>Learn More</Button>
        </Card>
      );
    }
  );
  return (
    <Recs>
      <h2>What We Like Right Now</h2>
      <CarouselContainer>
        <Carousel redArrow={true} cards={cards} />
      </CarouselContainer>
      <GalleryContainer>{cards}</GalleryContainer>
      <Hr />
    </Recs>
  );
};

export default LandingRecs;

const Recs = styled.div`
  h2 {
    margin-bottom: 25px;
  }
  @media screen and (min-width: 481px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1025px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;

const CarouselContainer = styled.div`
  padding: 0 33.5px;
  display: block;
  margin-bottom: 65px;
  @media screen and (min-width: 481px) {
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1025px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;

const GalleryContainer = styled.div`
  display: none;
  @media screen and (min-width: 481px) {
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
  @media screen and (min-width: 1025px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;

const Card = styled.div`
  max-width: 250px;
  height: 483px;
  display: flex !important;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img {
    width: 100%;
    height: auto;
    margin-bottom: 40px;
  }
  h3 {
    margin-bottom: 20px;
    font-weight: 700;
  }
  p {
    margin-bottom: 20px;
    font-weight: 500;
  }
  @media screen and (min-width: 481px) {
  }
  @media screen and (min-width: 768px) {
    max-width: 200px;
    height: 460.8px;
    button {
      width: 200px;
    }
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
    }
  }
  @media screen and (min-width: 1025px) {
    max-width: 250px;
    height: 500px;
    button {
      width: 250px;
    }
    h3 {
      font-size: 21px;
    }
    p {
      font-size: 18px;
    }
  }
  @media screen and (min-width: 1200px) {
    max-width: 345px;
    height: 555px;
    img {
      width: 250px;
    }
    button {
      width: 300px;
    }
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 20px;
      width: 300px;
    }
  }
`;
