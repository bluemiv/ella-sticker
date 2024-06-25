import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import dayjs, { Dayjs } from 'dayjs';

import stickerApi from '../../api/stickerApi';
import { DASHBOARD_ID } from '../../constants';
import { useParams } from 'react-router-dom';

interface TProps {
  baseDate: Dayjs;
}

const Calendar = ({ baseDate }: TProps) => {
  const params = useParams();
  const [curMonthData, setCurMonthData] = useState<{
    sticker: { [key: string]: any };
    discard: number[];
  } | null>(null);

  const fetchData = async () => {
    const { url } = stickerApi.getSticker({
      user: params?.user?.toLowerCase() || DASHBOARD_ID.ELLA,
      year: dayjs().year(),
    });
    const res = await fetch(url);
    return res.json();
  };

  useEffect(() => {
    fetchData().then((sticker) => setCurMonthData(sticker[`${baseDate.month() + 1}`]));
  }, []);

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
  }, [baseDate]);

  return (
    <div className="flex flex-col gap-xl">
      <div className="flex gap-xl">
        {['일', '월', '화', '수', '목', '금', '토'].map((label) => (
          <div key={label} className="w-[33px] h-[33px] flex items-center justify-center">
            {label}
          </div>
        ))}
      </div>
      {calendar.map((week, i) => {
        return (
          <div key={i} className="flex gap-xl">
            {week.map((date, j) => {
              const isWeekend = !!date && [0, 6].includes(baseDate.date(date).day());

              const stickerCount = !!date ? curMonthData?.sticker?.[date] ?? 0 : 0;

              return (
                <div
                  key={[i, j].join('-')}
                  className={classNames(
                    'w-[33px] h-[33px] flex items-center justify-center rounded-full',
                    isWeekend
                      ? 'text-zinc-400'
                      : stickerCount === 1
                        ? 'bg-[#20c997]'
                        : stickerCount === 2
                          ? 'bg-[#5c7cfa]'
                          : stickerCount >= 3
                            ? 'bg-[#845ef7]'
                            : 'bg-transparent',
                  )}
                >
                  {!!date ? date : ''}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
