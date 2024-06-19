import React from 'react';
import dayjs from 'dayjs';

const Footer = () => {
  return (
    <footer className="h-footer text-sub-text flex items-center justify-center text-sm">
      © {dayjs().year()} bluemiv. Some rights reserved.
    </footer>
  );
};

export default Footer;
