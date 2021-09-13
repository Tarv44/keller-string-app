import React from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';
import footerData from '../data/footer-nav-data';
const FooterDropdown = loadable(() => import('./FooterDropdown'));
const FooterStoreDetails = loadable(() => import('./FooterStoreDetails'));
const FooterNav = loadable(() => import('./FooterNav'));
const SignupInput = loadable(() => import('./SignupInput'));

const Footer = (props) => {
  const dropdowns = Object.entries(footerData).map((f, i) => (
    <FooterDropdown 
      title={f[0]}
      links={f[1]}
    />
  ))
  return (
    <Ftr>
      <FooterContainer>
        <NavSection>
          <Signup>
            <div>
              <h3>Newsletter Sign Up</h3>
              <p>Don’t miss out on sales & special events!</p>
              <p>Sign up for our email newsletter today!</p>
            </div>
            <SignupInput />
          </Signup>
          <Dropdowns>
            {dropdowns}
          </Dropdowns>
          <FooterNav 
            data={footerData}
          />
        </NavSection>
        <FooterStoreDetails/>
      </FooterContainer>
    </Ftr>
  );
};
export default Footer;

const Ftr = styled.footer`
  background: var(--color-grey-2);
  padding: 32px 0 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {}
`

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: center;
    width: 100%;
  }
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {}
`
const Signup = styled.div`
  margin-bottom: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
  }
  div {
    margin-bottom: 15px;
  }
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {
    h3, p {
      text-align: left;
    }
    div {
      margin-bottom: 10px;
    }
    align-items: flex-start;
    margin-bottom: 27px;
  }
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    h3 {
      font-size: 26px;
    }
    p {
      font-size: 19px;
    }
  }
  @media screen and (min-width: 1440px) {
    h3 {
      font-size: 32px;
    }
    p {
      font-size: 24px;
    }
  }
`

const NavSection = styled.div`
  margin-bottom: 35px;
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {}
`

const Dropdowns = styled.div`
  border-bottom: 0.75px solid rgba(118, 130, 142, 0.8);
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {}
`