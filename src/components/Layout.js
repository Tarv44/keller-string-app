import React from 'react';
import { GlobalStyle } from '../styles/GlobalStyles';
import Header from './Header';
import styled from 'styled-components';

const Layout = ({children}) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        {children}
      </Main>
    </>
  )
}

export default Layout;

const Main = styled.main`
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {}
`