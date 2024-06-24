import React, { useMemo } from 'react';
import dayjs from 'dayjs';

interface TProps {
  month?: number;
}

const StickerCalendarPreview = ({ month }: TProps) => {
  const baseDate = dayjs().month(month ?? dayjs().month() + 1);
  const daysInMonth = baseDate.daysInMonth();

  const weeks = useMemo(
    () =>
      Array.from({ length: daysInMonth }, (_, idx) => idx + 1).filter(
        (date) => baseDate.date(date).day() === 0,
      ).length,
    [month],
  );

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl">{dayjs().format('YYYY . MM')}</div>
      <div>
        {Array.from({ length: weeks }).map((_, idx) => {
          return <div>{idx + 1}주</div>;
        })}
      </div>
    </div>
  );
};

export default StickerCalendarPreview;
