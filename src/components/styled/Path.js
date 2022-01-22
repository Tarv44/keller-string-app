import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Path = ({ pathData }) => {
  const paths = pathData.map((p, i) => {
    if (i === pathData.length - 1) {
      return <span key={i}>{p.label}</span>;
    } else {
      return (
        <span key={i}>
          <Link to={p.path}>{p.label}</Link> /{" "}
        </span>
      );
    }
  });
  return <PathP>{paths}</PathP>;
};
export default Path;

const PathP = styled.p`
  text-transform: uppercase;
  color: #666;
  font-size: 14px;
  display: none;

  a {
    text-decoration: underline;
    color: #666;
  }
  @media screen and (min-width: 481px) {
  }
  @media screen and (min-width: 625px) {
  }
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
  @media screen and (min-width: 1025px) {
  }
  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;
