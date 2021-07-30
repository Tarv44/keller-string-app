import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/logo.png';
import Hamburger from '../images/hamburger.png';
import Close from '../images/close.png';
import Cart from '../images/cart.png';
import Heart from '../images/heart.png';
import Account from '../images/account.png';
import styled from 'styled-components';

const MenuBar = (props) => {
  return (
    <Bar>
      <MenuButton>
        <button onClick={() => props.setSidebarOpen(!props.sidebarOpen)}>
          {!props.sidebarOpen && <img width={22} src={Hamburger} alt="Menu Icon" />}
          {props.sidebarOpen && <img width={18} src={Close} alt="Close Menu Icon" />}
        </button>
      </MenuButton>
      <Link>
        <LogoImg width={50} src={Logo} alt="Keller Strings Logo"/>
      </Link>
      {/* <div>
        Dropdowns
      </div> */}
      <Icons>
        <Link>
          <AccountIcon src={Account} alt="Account Icon" />
        </Link>
        <Link>
          <HeartIcon src={Heart} alt="Favorite Icon" />
        </Link>
        <Link to={'/cart'}>
          <CartIcon src={Cart} alt="Cart Icon" />
        </Link>
      </Icons>
    </Bar>
  );
};

export default MenuBar;

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px 11px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 99;

  @media (min-width: 481px) {
    padding: 8px 25px 9.5px;
  }

  @media (min-width: 768px) {
    padding: 12px 70px 17px;
  }
`

const MenuButton = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 18px;
  width: 82px;

  @media (min-width: 768px) {
    display: none;
  }
`
const LogoImg = styled.img`
  width: 50px;

  @media (min-width: 481px) {
    width: 70px;
  }

  @media (min-width: 768px) {
    width: 110px;
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

  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
    width: 23px;
  }
`
const HeartIcon = styled.img`
  width: 20px;

  @media (min-width: 768px) {
    width: 23px;
  }
`
const CartIcon = styled.img`
  width: 22px;

  @media (min-width: 768px) {
    width: 28px;
  }
`
