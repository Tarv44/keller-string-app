import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AlertBar from "./AlertBar";
import MenuBar from "./MenuBar";
import SubmenuDropdown from "./SubmenuDropdown";
import MenuSidebar from "./MenuSidebar";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState(null);

  useEffect(() => {
    if (!!selectedDropdown) setSidebarOpen(false);
  }, [selectedDropdown]);

  useEffect(() => {
    if (sidebarOpen) setSelectedDropdown(null);
  }, [sidebarOpen]);

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
  );
};

export default Header;

const HeaderTag = styled.header`
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (min-width: 481px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1025px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;
