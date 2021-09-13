import React from 'react';
import styled from 'styled-components';
import FooterLink from './FooterLink';

const FooterNav = ({data}) => {
  const about = data["About"].map((l, i) => (
    <FooterLink 
      key={i}
      path={l.path}
      title={l.title}
    />
  ))
  const services = data["Services"].map((l, i) => (
    <FooterLink 
      key={i}
      path={l.path}
      title={l.title}
    />
  ))
  const shop = data["Shop"].map((l, i) => (
    <FooterLink 
      key={i}
      path={l.path}
      title={l.title}
    />
  ))
  const account = data["My Account"].map((l, i) => (
    <FooterLink 
      key={i}
      path={l.path}
      title={l.title}
    />
  ))
  const resourcesLong = data["Resources"].map((l, i) => (
    <FooterLink 
      key={i}
      path={l.path}
      title={l.title}
    />
  ))
  const resourcesShort = [
    <FooterLink 
      key={0}
      title={data["Resources"][0].title}
      path={data["Resources"][0].path}
    />,
    <FooterLink 
      key={1}
      title={data["Resources"][3].title}
      path={data["Resources"][3].path}
    />,
  ]
  return (
    <Nav>
      <div>
        <h3>About</h3>
        <ul>{about}</ul>
      </div>
      <div>
        <h3>Services</h3>
        <ul>{services}</ul>
      </div>
      <Right>
        <ShopAccount>
          <div>
            <h3>Shop</h3>
            <ul>{shop}</ul>
          </div>
          <div>
            <h3>My Account</h3>
            <ul>{account}</ul>
          </div>
        </ShopAccount>
        <ResourcesSml>
          <h3>Resources</h3>
          <ul>{resourcesShort}</ul>
        </ResourcesSml>
        <ResourcesLrg>
          <h3>Resources</h3>
          <ul>{resourcesLong}</ul>
        </ResourcesLrg>
      </Right>
    </Nav>
  );
};
export default FooterNav;

const Nav = styled.nav`
  display: none;
  align-items: flex-start;
  border-top: 3px solid #020300;
  padding-top: 20px;
  h3 {
    text-align: left;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 22px;
  }
  a {
    font-size: 14px;
  }
  > div:nth-child(-n + 2) {
    margin-right: 25px;
    width: 93px;
  }
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {
    h3 {
      font-size: 22px;
    }
    a {
      font-size: 20px;
    }

    h3, a {
      line-height: 30px;
    }
    > div:nth-child(-n + 2) {
      margin-right: 40px;
      width: 120px;
    }
  }
  @media screen and (min-width: 1440px) {
    > div:nth-child(-n + 2) {
      margin-right: 80px;
    }
  }
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`

const ShopAccount = styled.div`
  display: flex;
  align-items: flex-start;
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {
    > div:first-child {
      width: 100px;
      margin-right: 45px;
    }
  }
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {
    flex-direction: column-reverse;
    width: 154px;
    margin-right: 40px;
    > div:first-child {
      margin-bottom: 0;
      width: 100%;
    }
    > div:last-child {
      margin-bottom: 32px;
    }
  }
  @media screen and (min-width: 1440px) {
    margin-right: 80px;
  }
`

const ResourcesSml = styled.div`
  
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {
    display: none;
  }
`

const ResourcesLrg = styled.div`
  display: none;
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {
    display: block
  }
`