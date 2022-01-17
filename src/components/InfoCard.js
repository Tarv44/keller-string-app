import Link from "./styled/Link";
import React from "react";
import styled from "styled-components";
import Button from "./styled/Button";

const InfoCard = ({ title, description, link, linkLabel }) => {
  return (
    <Card>
      <h2>{title}</h2>
      <p>{description}</p>
      <Button as={Link} to={link}>
        {linkLabel}
      </Button>
    </Card>
  );
};
export default InfoCard;

const Card = styled.div`
  background: var(--color-grey-1);
  width: 355px;
  margin-bottom: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  h2 {
    color: var(--color-primary);
    width: 215px;
    margin-bottom: 9px;
  }
  p {
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 12px;
  }
  p > a {
    text-decoration: underline;
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
  }
`;
