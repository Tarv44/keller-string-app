import React, {lazy} from 'react';
const AlertBar = lazy(() => import('../AlertBar/AlertBar'));
// import * as styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <AlertBar />
    </header>
  )
}

export default Header;