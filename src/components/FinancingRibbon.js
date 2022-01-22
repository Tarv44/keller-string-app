import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const FinancingRibbon = (props) => {
  return (
    <Ribbon>
      Learn about our <Link to="/">financing options</Link>!
    </Ribbon>
  );
};
export default FinancingRibbon;

export const Ribbon = styled.p`
  font-size: 14px !important;
  display: block;
  width: 300px;
  right: 0;
  position: relative;
  background: var(--color-acc-olive);
  text-align: center;
  padding: 4px 0 4px 30px;
  margin: 35px 0;
  color: #fff;

  a {
    color: #fff;
    text-decoration: underline;
  }

  :before {
    content: "";
    position: absolute;
    display: block;
    border-color: var(--color-acc-olive);
    border-style: solid;
    border-width: 15px 0 15px 15px;
    z-index: 1;
    left: 0;
    bottom: 0;
    border-left-color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;
