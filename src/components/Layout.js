import React from 'react';
import { GlobalStyle } from '../styles/GlobalStyles';
import styled from 'styled-components';
import loadable from '@loadable/component';
import Footer from './Footer';
const Header = loadable(() => import('./Header'));

const Layout = ({children}) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  )
}

export default Layout;

const Main = styled.main`
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {}
`