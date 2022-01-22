import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import AddOnCard from "./AddOnCard";
import Hr from "./styled/Hr";

const AddOnsGallery = ({ title, subtitle, cardData }) => {
  const galleryCards = cardData.map((card, i) => (
    <AddOnCard key={`gallery-card-${i}`} data={card} />
  ));
  return (
    <Gallery>
      <h2>{title}</h2>
      {subtitle && <h3>{subtitle}</h3>}
      <CarouselContainer>
        <Carousel redArrow={true} cards={galleryCards} />
      </CarouselContainer>
      <GalleryContainer>{galleryCards}</GalleryContainer>
      <Hr />
    </Gallery>
  );
};
export default AddOnsGallery;

const Gallery = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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
    width: 100%;
  }
`;

const CarouselContainer = styled.div`
  padding: 0 33.5px;
  display: block;
  margin-bottom: 65px;
  width: 375px;
  @media screen and (min-width: 481px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1025px) {
  }
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

const GalleryContainer = styled.div`
  display: none;
  @media screen and (min-width: 481px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1025px) {
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: space-around;
    width: 1100px;
    margin-bottom: 120px;
  }
`;
