import React from 'react';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-main-background">
      <Outlet />
    </div>
  );
};

export default BaseLayout;
