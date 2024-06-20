import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const BaseLayout = () => {
  return (
    <div>
      <Header />
      <div className="min-h-contents">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
