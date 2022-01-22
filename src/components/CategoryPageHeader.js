import { Link } from "gatsby";
import React from "react";
import Path from "./styled/Path";
import InfoSVG from "../images/info-icon.svg";
import styled from "styled-components";

const CatHeader = ({ title, subtitle, path }) => {
  return (
    <Header>
      <PathHeader>
        <Path linkData={path} />
        <Ribbon>
          Learn about our <Link to="/">financing options</Link>!
        </Ribbon>
      </PathHeader>
      <TitleContainer>
        <TitleInfo>
          <h1>{title}</h1>
          <DesktopInfo>
            <p>
              Are you a <Link to="/">beginner</Link>?
            </p>
            <img width={30} height={30} src={InfoSVG} alt={"Info icon"} />
          </DesktopInfo>
        </TitleInfo>
        <p>{subtitle}</p>
      </TitleContainer>
      <MobileInfo>
        <p>
          Are you a <Link to="/">beginner</Link>?
        </p>
        <img width={30} height={30} src={InfoSVG} alt={"Info icon"} />
      </MobileInfo>
    </Header>
  );
};
export default CatHeader;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;

  @media screen and (min-width: 625px) {
    width: 555px;
  }
  @media screen and (min-width: 768px) {
    margin: 30px 0;
    width: 625px;
  }
  @media screen and (min-width: 900px) {
    width: 775px;
  }
  @media screen and (min-width: 1200px) {
    width: 1025px;
  }
  @media screen and (min-width: 1440px) {
    width: 1240px;
  }
`;
const PathHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  align-self: flex-end;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    margin-bottom: 33px;
  }
`;

const Ribbon = styled.p`
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
const TitleContainer = styled.div`
  text-align: left;
  width: 310px;
  p {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 5px;
  }
  @media screen and (min-width: 414px) {
    width: 360px;
  }
  @media screen and (min-width: 625px) {
    align-self: flex-start;
    width: 481px;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    p {
      font-size: 22px;
      line-height: 35px;
    }
  }
  @media screen and (min-width: 1200px) {
    p {
      font-size: 28px;
    }
  }
`;

const TitleInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 17px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Info = styled.div`
  align-items: center;
  justify-content: flex-end;
  width: 310px;
  p {
    font-style: italic;
    margin-right: 10px;
  }
  a {
    color: var(--color-primary);
    text-decoration: underline;
    font-weight: 600;
  }
  @media screen and (min-width: 414px) {
    width: 360px;
  }
  @media screen and (min-width: 625px) {
    align-self: flex-end;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    p {
      font-size: 16px;
    }
  }
`;
const MobileInfo = styled(Info)`
  display: flex;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const DesktopInfo = styled(Info)`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-self: center;
  }
`;
