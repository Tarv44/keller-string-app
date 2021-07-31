import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../data/MenuData';
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai';

const MenuDropdownTabs = ({selected, setSelected}) => {
  const tabs = data.map((t, i) => {
    const isSelected = !!selected && selected.label === t.label
    const handleSelect = () => {
      if (isSelected) setSelected(null)
      else setSelected(t)
    }
    return (
      <Tab isSelected={isSelected} onClick={handleSelect}>
        <span>{t.label}</span>
        {!isSelected && <AiFillCaretDown size={16} />}
        {isSelected && <AiFillCaretUp size={16} />}
      </Tab>
    )
  })
  return (
    <Tabs>
      {tabs}
    </Tabs>
  );
};

export default MenuDropdownTabs;

const Tabs = styled.div`
  display: none;
  position: relative;
  min-height: 100%;
  align-items: stretch;

  @media (min-width: 481px) {}

  @media (min-width: 1025px) {
    display: flex;
  }
`


const Tab = styled.div`
  text-align: left;
  text-transform: uppercase;
  text-decoration: ${props => props.isSelected && 'underline'};
  font-family: 'Perpetua';
  font-size: ${props => props.isSelected ? '19px' : '20px'};
  font-weight: ${props => props.isSelected ? 700 : 400};
  padding: 0 16px;
  display: flex;
  align-items: center;
  min-height: 100%;
  background: ${props => props.isSelected && 'var(--color-grey-1)'};


  span {
    margin-right: 5px;
  }

  path {
    color: var(--color-primary);
  }
`
