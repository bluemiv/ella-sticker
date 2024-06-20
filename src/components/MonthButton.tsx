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
      className="rounded-lg shadow-lg bg-slate-50 hover:bg-brand-100 active:shadow-none duration-200 ease-in-out transition w-[100px] h-[100px]"
      onClick={onClick}
    >
      {month}월
    </button>
  );
};

export default MonthButton;
