import React, { useEffect, useState } from 'react';
import loadable from '@loadable/component';
const AlertBar = loadable(() => import('./AlertBar'));
const MenuBar = loadable(() => import('./MenuBar'));
const SubmenuDropdown = loadable(() => import('./SubmenuDropdown'));
const MenuSidebar = loadable(() => import('./MenuSidebar'));
const styled = loadable(() => import('styled-components'));

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedDropdown, setSelectedDropdown] = useState(null)

  useEffect(() => {
    if (!!selectedDropdown) setSidebarOpen(false);
  }, [selectedDropdown])

  useEffect(() => {
    if (sidebarOpen) setSelectedDropdown(null);
  }, [sidebarOpen])

  return (
    <HeaderTag>
      <AlertBar />
      <MenuBar 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
        selectedDropdown={selectedDropdown}
        setSelectedDropdown={setSelectedDropdown}
      />
      {!!selectedDropdown && <SubmenuDropdown selected={selectedDropdown} />}
      <MenuSidebar sidebarOpen={sidebarOpen} />
    </HeaderTag>
  )
}

export default Header;

const HeaderTag = styled.header`
  display: flex;
  flex-direction: column;
  position: relative;
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {}
`