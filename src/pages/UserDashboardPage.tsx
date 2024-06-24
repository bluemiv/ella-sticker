import React from 'react';
import { StickerCalendarPreview } from '../components';

const UserDashboardPage = () => {
  return (
    <div className="w-full h-screen flex items-center">
      <div className="max-w-[900px] mx-auto">
        <StickerCalendarPreview month={6} />
      </div>
    </div>
  );
};

export default UserDashboardPage;
