import React, { useState } from 'react';
import AlertBar from './AlertBar';
import MenuBar from './MenuBar';
import MenuSidebar from './MenuSidebar';
import styled from 'styled-components';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <HeaderTag>
      <AlertBar />
      <MenuBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <MenuSidebar sidebarOpen={sidebarOpen} />
    </HeaderTag>
  )
}

export default Header;

const HeaderTag = styled.header`

  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {}
`