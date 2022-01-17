import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Button from "./styled/Button";

const CategoryCard = ({ card }) => {
  return (
    <Card>
      {card.img}
      <TitleContainer>
        <h2>{card.title}</h2>
        <p>{card.subtitle}</p>
        <Btn as={Link} to={card.path} />
      </TitleContainer>
    </Card>
  );
};
export default CategoryCard;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 354px;
  height: 200px;
  border: 1px solid #f1f3f4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-right: 25px;
  img {
    height: 198px;
    width: auto;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  @media screen and (min-width: 481px) {
  }
  @media screen and (min-width: 625px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1025px) {
  }
  @media screen and (min-width: 1200px) {
    width: 510px;
    height: 340px;
    padding-right: 30px;
    img {
      height: 338px;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 600px;
    height: 400px;
    padding-right: 40px;
    img {
      height: 398px;
    }
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 28px;
    margin-bottom: 10px;
  }
  p {
    display: none;
    margin-bottom: 15px;
    font-size: 20px;
    line-height: 32px;
    width: 250px;
    position: relative;
    z-index: 1;
  }
  @media screen and (min-width: 481px) {
  }
  @media screen and (min-width: 625px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1025px) {
  }
  @media screen and (min-width: 1200px) {
    text-align: right;
    align-items: flex-end;
    h2 {
      font-size: 36px;
    }
    p {
      display: block;
    }
  }
  @media screen and (min-width: 1440px) {
    p {
      width: 330px;
    }
  }
`;

const Btn = styled(Button)`
  width: 200px;
  :after {
    content: "Shop Now";
  }
  @media screen and (min-width: 481px) {
  }
  @media screen and (min-width: 625px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1025px) {
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
    width: 223px;
    :after {
      content: "Shop Our Inventory";
    }
  }
`;
