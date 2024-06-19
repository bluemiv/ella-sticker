import React from 'react';

interface TProps {
  month: number;
}

const MonthButton = ({ month }: TProps) => {
  return (
    <button className="rounded-lg shadow-lg bg-slate-50 hover:bg-brand-100 active:shadow-none duration-200 ease-in-out transition w-[100px] h-[100px]">
      {month}월
    </button>
  );
};

export default MonthButton;
