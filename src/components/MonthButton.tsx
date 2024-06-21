import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '../constants';

interface TProps {
  month: number;
}

const MonthButton = ({ month }: TProps) => {
  const nav = useNavigate();

  const onClick = () => nav(ROUTE_PATH.MONTH_STICKER.replace(':month', month.toString()));

  return (
    <button
      className="relative rounded-lg overflow-hidden w-[150px] h-[150px] group"
      onClick={onClick}
    >
      <img
        className="absolute top-0 w-full h-full object-cover group-hover:scale-110 transition ease-in-out duration-200"
        src={`/r/i/month${month}.webp`}
        alt={month.toString()}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
      <div className="absolute top-0 w-full h-full flex items-center justify-center">
        <span className="text-white text-2xl font-bold">{month}월</span>
      </div>
    </button>
  );
};

export default MonthButton;
