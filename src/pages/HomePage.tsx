import React from 'react';
import { MonthButton } from '../components';

const HomePage = () => {
  return (
    <div className="">
      <div className="m-auto max-w-[1200px] grid grid-cols-3 gap-lg">
        {Array.from({ length: 12 }, (_, idx) => idx + 1).map((month) => (
          <div key={month} className="flex items-center justify-center">
            <MonthButton month={month} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
