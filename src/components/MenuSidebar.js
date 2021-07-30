import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../data/SidbarData';
import {AiFillCaretRight} from 'react-icons/ai';

const MenuSidebar = (props) => {
  const [selected, setSelected] = useState(null)
  const tabs = data.map((t, i) => {
    return (
      <Tab>
        <span>{t.label}</span>
        <AiFillCaretRight size={16} />
      </Tab>
    )
  })
  return (
    <Sidebar sidebarOpen={props.sidebarOpen} >
      {tabs}
    </Sidebar>
  );
};

export default MenuSidebar;

const Sidebar = styled.div`
  display: ${props => props.sidebarOpen ? 'flex' : 'none'};
  flex-direction: column;
  position: absolute;
  z-index: -1;
  background: var(--color-bg-grey);
  width: 363px;
  height: 100vh;
  padding: 9px 18px 0 20px;
`

const Tab = styled.button`
  text-align: left;
  text-transform: uppercase;
  font-family: 'Perpetua';
  font-size: 28px;
  font-weight: bold;
  padding: 12px 0 13px;
  border-bottom: 1px solid rgba(118, 130, 142, 0.4);
  display: flex;
  align-items: center;

  span {
    margin-right: 10px;
  }

  path {
    color: var(--color-red);
  }
`