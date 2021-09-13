import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/logo.png';
import Logo2x from '../images/logo@2x.png';
import Logo3x from '../images/logo@3x.png';
import Hamburger from '../images/hamburger.png';
import Close from '../images/close.png';
import Cart from '../images/cart.png';
import Heart from '../images/heart.png';
import Account from '../images/account.png';
import styled from 'styled-components';
import loadable from '@loadable/component';
const MenuDropdownTabs = loadable(() => import('./MenuDropdownTabs'));

const MenuBar = (props) => {
  return (
    <Bar>
      <MenuButton>
        <button onClick={() => props.setSidebarOpen(!props.sidebarOpen)}>
          {!props.sidebarOpen && <img width={22} height={17.5} src={Hamburger} alt="Menu Icon" />}
          {props.sidebarOpen && <img width={18} height={18} src={Close} alt="Close Menu Icon" />}
        </button>
      </MenuButton>
      <Link to='/'>
        <LogoImg 
          width={50} 
          height={41.13} 
          src={Logo}
          srcSet={`${Logo} 50w, ${Logo2x} 100w, ${Logo3x} 150w`} 
          alt="Keller Strings Logo"/>
      </Link>
      <MenuDropdownTabs 
        selected={props.selectedDropdown} 
        setSelected={props.setSelectedDropdown} 
      />
      <Icons>
        <Link>
          <AccountIcon width={20} height={20} src={Account} alt="Account Icon" />
        </Link>
        <Link>
          <HeartIcon width={20} height={17.44} src={Heart} alt="Favorite Icon" />
        </Link>
        <Link to={'/cart'}>
          <CartIcon width={22} height={18.2} src={Cart} alt="Cart Icon" />
        </Link>
      </Icons>
    </Bar>
  );
};

export default MenuBar;

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 0 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 99;

  @media screen and (min-width: 481px) {
    padding: 0 25px;
  }
  @media screen and (min-width: 1025px) {
    padding: 0 45px;
  }
  @media screen and (min-width: 1200px) {
    padding: 0 70px;
  }
`

const MenuButton = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 82px;

  @media screen and (min-width: 768px) {
    width: 104px;
  }
  @media screen and (min-width: 1025px) {
    display: none;
  }
`
const LogoImg = styled.img`
  width: 50px;
  height: auto;
  padding: 8px 0 11px;

  @media screen and (min-width: 481px) {
    width: 70px;
    padding: 8px 0 9.5px;
  }
  @media screen and (min-width: 768px) {
    width: 90px;
    padding: 10px 0 13px;
  }

  @media screen and (min-width: 1025px) {
    width: 110px;
    padding: 12px 0 17px;
  }
`
const Icons = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-right: 10px;
  }
  > *:last-child {
    margin-right: 0;
  }

  @media screen and (min-width: 768px) {
    > * {
      margin-right: 15px;
    }
    > *:last-child {
      margin-right: 0;
    }
  }
`
const AccountIcon = styled.img`
  width: 20px;

  @media screen and (min-width: 768px) {
    width: 23px;
  }
`
const HeartIcon = styled.img`
  width: 20px;

  @media screen and (min-width: 768px) {
    width: 23px;
  }
`
const CartIcon = styled.img`
  width: 22px;

  @media screen and (min-width: 768px) {
    width: 28px;
  }
`
