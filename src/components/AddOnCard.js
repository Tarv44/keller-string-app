import React from "react";
import Button from "./styled/Button";
import Link from "./styled/Link";
import styled from "styled-components";

const AddOnCard = ({ data }) => {
  const { image, title, linkPath, linkLabel } = data;
  return (
    <Card>
      <div>
        <ImageContainer>
          <picture>
            <source srcSet={image.fluid.srcSetWebp} type="image/webp" />
            <source srcSet={image.fluid.srcSet} type="image/png" />
            <img width={250} height={250} src={image.fluid.src} alt={title} />
          </picture>
        </ImageContainer>
        <h3>{title}</h3>
      </div>
      <Button as={Link} to={linkPath}>
        {linkLabel}
      </Button>
    </Card>
  );
};
export default AddOnCard;

const Card = styled.div`
  max-width: 250px;
  height: auto;
  display: flex !important;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img {
    width: 100%;
    height: 250px;
    margin-bottom: 40px;
    overflow: hidden;
    margin-bottom: 15px;
  }
  h3 {
    margin-bottom: 15px;
    font-weight: 700;
  }
  @media screen and (min-width: 481px) {
  }
  @media screen and (min-width: 768px) {
    max-width: 175px;
    button {
      width: 200px;
    }
    h3 {
      font-size: 18px;
    }
  }
  @media screen and (min-width: 1025px) {
    max-width: 250px;
    button {
      width: 250px;
    }
    h3 {
      font-size: 21px;
    }
  }
  @media screen and (min-width: 1200px) {
    max-width: 345px;

    button {
      width: 300px;
    }
    h3 {
      font-size: 24px;
    }
  }
`;

const ImageContainer = styled.div`
  max-width: 250px;
  max-height: 250px;
  @media screen and (min-width: 481px) {
  }
  @media screen and (min-width: 625px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1025px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;
