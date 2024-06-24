import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import Calendar from './Calendar';

interface TProps {
  month: number;
}

const StickerCalendarPreview = ({ month }: TProps) => {
  const [baseDate, setBaseDate] = useState<Dayjs>(dayjs().month(month - 1));

  return (
    <div className="flex flex-col gap-xl items-center">
      <div className="text-4xl">{dayjs().format('YYYY . MM')}</div>
      <Calendar baseDate={baseDate} />
      <div className="flex gap-xl">
        {[
          { label: '1개', color: '#20c997' },
          { label: '2개', color: '#5c7cfa' },
          { label: '3개 이상', color: '#845ef7' },
        ].map(({ label, color }) => (
          <div key={label} className="flex items-center gap-sm">
            <div className={`w-[11px] h-[11px] bg-[${color}] rounded-full`} />
            <span className="text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickerCalendarPreview;
