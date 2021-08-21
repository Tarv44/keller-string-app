import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const FooterLink = ({path, title}) => {
  return (
    <LinkLi>
      <Link path={path}>{title}</Link>
    </LinkLi>
  );
};
export default FooterLink;

const LinkLi = styled.li`
  text-align: left;
  margin-bottom: 8px;
  text-decoration: underline;
  :last-child {
    margin-bottom: 15px;
  }
  @media (min-width: 481px) {}
  @media (min-width: 768px) {
    margin-bottom: 0;
    line-height: 22px;
    :last-child {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {}
`