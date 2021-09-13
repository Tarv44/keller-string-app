import React, { useState } from 'react';
import styled from 'styled-components';
import Caret from '../images/down-caret.svg';
import FooterLink from './FooterLink';

const FooterDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const links = props.links.map((l, i) => (
    <FooterLink 
      key={i}
      path={l.path}
      title={l.title}
    />
  ))
  return (
    <Dropdown>
      <Button onClick={() => setIsOpen(!isOpen)}>
        <h3>{props.title}</h3>
        <Img 
          width={20}
          height={15}
          isOpen={isOpen} 
          src={Caret} 
          alt={'Caret'} 
        />
      </Button>
      {isOpen && (
        <nav>
          <Ul>
            {links}
          </Ul>
        </nav>
      )}
    </Dropdown>
  );
};
export default FooterDropdown;

const Dropdown = styled.div`
  h3 {
    text-transform: uppercase;
  }
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {}
`

const Ul = styled.ul`
  padding-left: 41px;
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {}
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-top:0.75px solid rgba(118, 130, 142, 0.8);
  padding: 10px 31px;
  h3 {
    font-size: 18px;
    font-weight: 600;
  }
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {}
`

const Img = styled.img`
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {}
`