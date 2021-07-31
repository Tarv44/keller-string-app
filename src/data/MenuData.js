import React from 'react';
import SubmenuSidebarShop from '../components/SubmenuSidebarShop';

const SidebarData = [
  {
    label: `Shop`,
    sidebar: <SubmenuSidebarShop />,
    dropdown: <div></div>
  },
  {
    label: `Rentals`,
    sidebar: <div></div>,
    dropdown: <div></div>
  },
  {
    label: `Services`,
    sidebar: <div></div>,
    dropdown: <div></div>
  },
  {
    label: `Resources`,
    sidebar: <div></div>,
    dropdown: <div></div>
  },
  {
    label: `About`,
    sidebar: <div></div>,
    dropdown: <div></div>
  },
]

export default SidebarData;