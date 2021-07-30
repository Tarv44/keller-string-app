import React, { useState } from 'react';
import AlertBar from './AlertBar';
import MenuBar from './MenuBar';
import MenuSidebar from './MenuSidebar';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <header>
      <AlertBar />
      <MenuBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <MenuSidebar sidebarOpen={sidebarOpen} />
    </header>
  )
}

export default Header;

