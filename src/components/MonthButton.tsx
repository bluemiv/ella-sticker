import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '../constants';
import dayjs from 'dayjs';
import classNames from 'classnames';

interface TProps {
  month: number;
}

const MonthButton = ({ month }: TProps) => {
  const nav = useNavigate();

  const onClick = () => nav(ROUTE_PATH.MONTH_STICKER.replace(':month', month.toString()));

  const isCurrentMonth = dayjs().month() + 1 === month;

  return (
    <button
      className={classNames(
        'relative rounded-lg overflow-hidden w-[150px] h-[150px] group',
        isCurrentMonth ? 'border-4 border-yellow-400' : '',
      )}
      onClick={onClick}
    >
      <img
        className="absolute top-0 w-full h-full object-cover group-hover:scale-125 transition ease-in-out duration-200"
        src={`/r/i/month${month}.webp`}
        alt={month.toString()}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 group-hover:backdrop-blur-sm" />
      <div className="absolute top-0 w-full h-full flex items-center justify-center">
        <span className="text-white text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {month}월
        </span>
      </div>
    </button>
  );
};

export default MonthButton;
