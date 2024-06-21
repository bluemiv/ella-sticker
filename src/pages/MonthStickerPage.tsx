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
  }, [month]);

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
      <div className="relative h-[240px] text-white rounded-md overflow-hidden">
        <div className="absolute top-0 left-0 w-full">
          <img className="w-full h-[240px] object-cover" src={`/r/i/month${month}.webp`} alt="bg" />
        </div>
        <div className="absolute top-0 bg-black/20 backdrop-blur-sm w-full h-full" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-lg text-center">
          <div className="text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {month}월 스티커 판
          </div>
          <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            이번달도 열심히 모아볼까? 지각하지 않는 너의 모습이 너무 아름다워!
          </div>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-5 gap-xl">
        {workingDaysInMonth.map((date) => {
          const curDate = dayjs().date(date);
          const isDiscard = stickerInfo?.discard.includes(curDate.date());
          const stickerCount = (stickerInfo?.sticker || {})[curDate.date().toString()] || 0;
          const hasSticker = stickerCount > 0;

          if (!isDiscard && hasSticker) {
            return (
              <div key={date} className="flex items-center justify-center">
                <div
                  className={classNames(
                    'rounded-full flex flex-col gap-sm items-center w-[100px] h-[100px]',
                  )}
                >
                  <span className="">{stickerCount}개 획득</span>
                  <img
                    className="max-h-[60px] h-full animate-bounce"
                    src={`/r/i/stamp${(date % 5) + 1}.png`}
                    alt={date.toString()}
                  />
                </div>
              </div>
            );
          }

          return (
            <div key={date} className="flex items-center justify-center">
              <div
                className={classNames(
                  'rounded-full flex items-center justify-center w-[100px] h-[100px] font-bold',
                  isDiscard ? 'bg-slate-50 text-sub-text' : 'bg-slate-100 text-sub-text',
                )}
              >
                {isDiscard
                  ? '해당없음'
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
