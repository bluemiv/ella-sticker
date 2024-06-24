import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';

const SidebarLayout = () => {
  return (
    <div className="w-full h-full overflow-hidden flex">
      <Sidebar />
      <main className="bg-main-background flex-1 p-md">
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;
