import React from 'react';
import { GlobalStyle } from '../styles/GlobalStyles';
import styled from 'styled-components';
import loadable from '@loadable/component';
const Header = loadable(() => import('./Header'));

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