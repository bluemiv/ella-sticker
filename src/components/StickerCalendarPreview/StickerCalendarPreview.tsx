import React, { useMemo, useRef } from 'react';
import dayjs from 'dayjs';

interface TProps {
  month: number;
}

const StickerCalendarPreview = ({ month }: TProps) => {
  const baseDate = dayjs().month(month - 1);
  const daysInMonth = baseDate.daysInMonth();

  const calendar = useMemo(() => {
    let curDate = 1;
    const result = [];
    while (true) {
      if (curDate > daysInMonth) break;

      result.push(
        [0, 1, 2, 3, 4, 5, 6].map((day, j) => {
          if (curDate > daysInMonth) return null;
          const isCurDay = dayjs().date(curDate).day() === day;
          if (isCurDay) {
            const date = curDate;
            curDate += 1;
            return date;
          }
          return null;
        }),
      );
    }
    return result;
  }, [month]);

  console.log(calendar);

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl">{dayjs().format('YYYY . MM')}</div>
      <div>
        {calendar.map((week, i) => {
          return (
            <div key={i} className="flex gap-md">
              {week.map((date) => {
                return (
                  <div key={[i, date].join('-')} className="w-[50px] h-[50px]">
                    {!!date ? date : ''}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StickerCalendarPreview;
