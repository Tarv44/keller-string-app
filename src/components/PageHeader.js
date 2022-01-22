import React from "react";
import styled from "styled-components";
import BeginnerInfo from "./BeginnerInfo";
import Path from "./styled/Path";
import FinancingRibbon from "./FinancingRibbon";

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

const PageHeader = ({ path, title, info, subtitle }) => {
  return (
    <Header>
      <PathHeader>
        <Path pathData={path} />
        <FinancingRibbon />
      </PathHeader>
      <TitleContainer>
        <TitleInfo>
          <h1>{title}</h1>
          {info && (
            <DesktopInfo>
              <BeginnerInfo />
            </DesktopInfo>
          )}
        </TitleInfo>
        {subtitle && <p>{subtitle}</p>}
      </TitleContainer>
      {info && (
        <MobileInfo>
          <BeginnerInfo />
        </MobileInfo>
      )}
    </Header>
  );
};
export default PageHeader;
