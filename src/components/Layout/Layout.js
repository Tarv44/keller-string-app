import React, {lazy} from 'react';
const Header = lazy(() => import('../Header/Header'));
import './Layout.css';

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout;