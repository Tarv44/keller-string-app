import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Path = ({linkData, title}) => {
  const links = linkData.map((l, i) => {
    if (i === linkData.length-1) {
      return <span>{l.label}</span>
    } else {
      return <span><Link to={l.path}>{l.label}</Link> / </span>
    }
  })
  return (
    <PathP>{links}</PathP>
  );
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
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 625px) {}
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`