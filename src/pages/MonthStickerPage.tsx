import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';

const MonthStickerPage = () => {
  const [stickerInfo, setStickerInfo] = useState<{
    sticker: { [key: string]: any };
    discard: number[];
  } | null>(null);

  const nav = useNavigate();
  const params = useParams();
  const month = params?.month;

  const daysInMonth = dayjs(month).daysInMonth();
  const workingDaysInMonth = Array.from({ length: daysInMonth }, (_, idx) => idx + 1).filter(
    (date) => {
      const day = dayjs().date(date).day();
      return day !== 0 && day !== 6;
    },
  );

  const fetchData = async () => {
    const res = await fetch('/data/sticker.json');
    return res.json();
  };

  useEffect(() => {
    fetchData().then((json) => {
      setStickerInfo(json[month?.toString() || dayjs().month().toString()]);
    });
  }, []);

  return (
    <div className="mx-auto max-w-[1200px] flex flex-col gap-xl">
      <div className="mt-lg">
        <button
          className="shadow-md bg-slate-50 hover:bg-slate-100 active:shadow-none rounded-md font-bold p-md"
          onClick={() => nav(-1)}
        >
          &lt; 뒤로가기
        </button>
      </div>
      <div className="flex flex-col gap-lg text-center">
        <div className="text-2xl font-bold">{month}월 스티커 판</div>
        <div className="text-sub-text">
          이번달도 열심히 모아볼까? 지각하지 않는 너의 모습이 너무 아름다워!
        </div>
      </div>
      <div className="mx-auto grid grid-cols-5 gap-xl">
        {workingDaysInMonth.map((date) => {
          const curDate = dayjs().date(date);
          const isDiscard = stickerInfo?.discard.includes(curDate.date());
          const stickerCount = (stickerInfo?.sticker || {})[curDate.date().toString()] || 0;
          const hasSticker = stickerCount > 0;

          return (
            <div key={date} className="flex items-center justify-center">
              <div
                className={classNames(
                  'rounded-full flex items-center justify-center w-[100px] h-[100px] font-bold',
                  isDiscard
                    ? 'bg-slate-50 text-sub-text'
                    : hasSticker
                      ? 'bg-brand-100'
                      : 'bg-slate-100 text-sub-text',
                )}
              >
                {isDiscard
                  ? '해당없음'
                  : hasSticker
                    ? `${stickerCount}개 획득`
                    : `${curDate.date()}일 (${{ 0: '일', 1: '월', 2: '화', 3: '수', 4: '목', 5: '금', 6: '토' }[curDate.day()]}) `}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthStickerPage;
