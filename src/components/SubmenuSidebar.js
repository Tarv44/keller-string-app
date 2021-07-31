import React from 'react';
import styled from 'styled-components';
import {AiFillCaretLeft} from 'react-icons/ai';

const SubmenuSidebar = ({selected, setSelected}) => {
  return (
    <Submenu>
      <BackTab onClick={() => setSelected(null)}>
        <AiFillCaretLeft size={16} />
        <span>{selected.label}</span>
      </BackTab>
      <Items>
        {selected.sidebar}
      </Items>
      <Back onClick={() => setSelected(null)}>
        <AiFillCaretLeft size={16} />
        <span>Back</span>
      </Back>
    </Submenu>
  );
};

export default SubmenuSidebar;

const Submenu = styled.div`
  h3 {
    font-weight: 700;
    font-size: 18px;
  }
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {}
`

const BackTab = styled.button`
  width: 100%;
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
    margin-left: 10px;
  }
  path {
    color: var(--color-primary);
  }
`

const Items = styled.div`
  > div {
    padding-top: 15px;
  }
  > div > div {
    padding: 15px 0 15px 20px;
  }

  p, li {
    font-size: 18px;
  }
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {}
`

const Back = styled.button`
  width: 100%;
  text-align: left;
  font-family: 'Libre Franklin';
  font-size: 14px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 25px;

  span {
    margin-left: 5.5px;
  }
  path {
    color: var(--color-primary);
  }
`