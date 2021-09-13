import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Button from './styled/Button';

const SubmenuDropdownShop = (props) => {
  console.log(props.test)
  return (
    <Submenu>
      <Inventory>
        <h3>Inventory</h3>
        <div>
          <InvItems>
            <li>
              <Link to='/instrument-categories'>Instruments</Link>
            </li>
            <li>
              <Link>Accesories</Link>
            </li>
            <li>
              <Link>Bows</Link>
            </li>
            <li>
              <Link>Electronics</Link>
            </li>
            <li>
              <Link>Cases</Link>
            </li>
            <li>
              <Link>Gifts</Link>
            </li>
          </InvItems>
          <p>Learn more about the <a href='www.google.com' target='_blank' rel='noreferrer' >product lines</a> we offer. </p>
        </div>
      </Inventory>
      <Cta>
        <div>
          <h3>Don’t Miss Out on This</h3>
          <ul>
            <li>
              <Link>What's New</Link>
            </li>
            <li>
              <Link>Financing Options</Link>
            </li>
            <li>
              <Link>Sales & Events</Link>
            </li>
          </ul>
        </div>
        <Btn as={Link} to={'/cart'}>Schedule an Instrument Viewing</Btn>
      </Cta>
    </Submenu>
  );
};
export default SubmenuDropdownShop;

const Submenu = styled.div`
  display: flex;
  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  li {
    margin: 0 0 15px;
  }

  li, p {
    font-size: 22px;
  }
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {}
`

const Inventory = styled.div`
  border-right: 1px solid #000000;
  p > a {
    text-decoration: underline;
  }
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {}
`

const InvItems = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 35px;
  li {
    width: 50%;
  }
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {}
`

const Cta = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {}
`

const Btn = styled(Button)`
  padding: 6px 20px;
  width: 100%;
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {}
`