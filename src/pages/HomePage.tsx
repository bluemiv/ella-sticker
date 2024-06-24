import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '../constants';

const HomePage = () => {
  const nav = useNavigate();
  return (
    <div className="w-full h-full flex flex-col sm:flex-row items-center justify-center p-xl gap-xl">
      {[
        { id: 'ella', label: '엘라' },
        { id: 'may', label: '오월' },
      ].map(({ id, label }) => (
        <button
          key={id}
          className="w-full flex-1 bg-white/10 rounded-xl h-[300px] max-w-[300px] flex flex-col gap-md items-center justify-center shadow-xl active:shadow-none group"
          onClick={() => nav(ROUTE_PATH.USER_DASHBOARD.replace(':user', id))}
        >
          <div className="text-4xl">{label}</div>
          <div className="hidden group-hover:block">GO</div>
        </button>
      ))}
    </div>
  );
};

export default HomePage;
