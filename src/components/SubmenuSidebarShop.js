import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import loadable from '@loadable/component';
const Button = loadable(() => import('./styled/Button'));

const SubmenuSidebarShop = (props) => {
  console.log(props.test)
  return (
    <>
      <Inventory>
        <h3>Inventory</h3>
        <div>
          <InvItems>
            <li>
              <Link>Instruments</Link>
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
        <h3>Don’t Miss Out on This</h3>
        <div>
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
        <Btn as={Link} to={'/cart'}>Schedule a Visit</Btn>
      </Cta>
    </>
  );
};
export default SubmenuSidebarShop;

const Inventory = styled.div`
  border-bottom: 1px solid rgba(118, 130, 142, 0.4);

  p > a {
    text-decoration: underline;
  }
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {}
`

const InvItems = styled.ul`
  display: flex;
  flex-flow: row wrap;

  li {
    width: 50%;
    margin: 0 0 15px;
  }
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {}
`

const Cta = styled.div`
  li {
    margin: 0 0 15px;
  }
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {}
`

const Btn = styled(Button)`
  padding: 7px 57.5px;
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {}
`