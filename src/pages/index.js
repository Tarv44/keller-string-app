import React from 'react';
import loadable from '@loadable/component';
const Layout = loadable(() => import('../components/Layout'));
const Landing = loadable(() => import('../components/Landing'));

const index = () => {
  return (
    <Layout>
      <Landing />
    </Layout>
  )
}

export default index;
