import React from 'react';
import { MonthButton } from '../components';

const HomePage = () => {
  return (
    <div className="">
      <div className="m-auto max-w-[1200px] flex flex-col">
        <div className="flex items-center justify-center w-full h-[230px] text-3xl font-bold">
          <span className="text-brand-500">엘라</span>의 지각 스티커판
        </div>
        <div className="grid grid-cols-3 gap-lg">
          {Array.from({ length: 12 }, (_, idx) => idx + 1).map((month) => (
            <div key={month} className="flex items-center justify-center">
              <MonthButton month={month} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
