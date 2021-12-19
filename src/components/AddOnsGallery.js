import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";

const Gallery = styled.div({});

const CarouselContainer = styled.div({});

const GalleryContainer = styled.div({});

const AddOnsGallery = ({ title, subtitle, cardData }) => {
  const galleryCards = cardData.map((card, i) => (
    <AddOnCard key={`gallery-card-${i}`} data={card} />
  ));
  return (
    <Gallery>
      <h1>AddOnsGallery</h1>
      <h2>{title}</h2>
      {subtitle && <h3>{subtitle}</h3>}
      <CarouselContainer>{galleryCards}</CarouselContainer>
      <GalleryContainer>{galleryCards}</GalleryContainer>
    </Gallery>
  );
};
export default AddOnsGallery;
