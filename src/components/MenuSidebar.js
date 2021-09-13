import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../data/MenuData';
import {AiFillCaretRight} from 'react-icons/ai';
import loadable from '@loadable/component';
const SubmenuSidebar = loadable(() => import('./SubmenuSidebar'));

const MenuSidebar = (props) => {
  const [selected, setSelected] = useState(null)
  const tabs = data.map((t, i) => {
    return (
      <Tab key={i} onClick={() => setSelected(t)}>
        <span>{t.label}</span>
        <AiFillCaretRight size={16} />
      </Tab>
    )
  })
  return (
    <Sidebar sidebarOpen={props.sidebarOpen} >
      {!selected && tabs}
      {!!selected && (
        <SubmenuSidebar 
          selected={selected} 
          setSelected={setSelected}
        /> 
      )}
    </Sidebar>
  );
};

export default MenuSidebar;

const Sidebar = styled.div`
  display: ${props => props.sidebarOpen ? 'flex' : 'none'};
  flex-direction: column;
  position: absolute;
  z-index: 98;
  background: var(--color-grey-1);
  width: 363px;
  height: calc(100vh - 94.28px);
  padding: 9px 18px 0 20px;
  top: 100%;

  @media screen and (min-width: 481px) {
    height: calc(100vh - 119.3px);
  }

  @media screen and (min-width: 768px) {}

  @media screen and (min-width: 1025px) {
    display: none;
  }
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
    color: var(--color-primary);
  }
`
